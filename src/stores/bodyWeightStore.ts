import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { supabase } from '../lib/supabase';

export interface BodyWeightEntry {
    date: string;
    weight: number;
    userId: string;
    _synced?: boolean;
}

interface BodyWeightState {
    entries: BodyWeightEntry[];
    supabaseReady: boolean;
    _hydrated: boolean;

    init: () => Promise<void>;
    addEntry: (userId: string, weight: number) => void;
    getEntries: (userId: string) => BodyWeightEntry[];
    getTodayEntry: (userId: string) => BodyWeightEntry | undefined;
    syncPending: () => Promise<void>;
}

let onlineListenerRegistered = false;

function registerOnlineListener(syncFn: () => Promise<void>) {
    if (onlineListenerRegistered || typeof window === 'undefined') return;
    onlineListenerRegistered = true;

    window.addEventListener('online', () => {
        syncFn();
    });
}

export const useBodyWeightStore = create<BodyWeightState>()(
    persist(
        (set, get) => ({
            entries: [],
            supabaseReady: false,
            _hydrated: false,

            init: async () => {
                if (get()._hydrated) return;

                registerOnlineListener(() => get().syncPending());

                try {
                    const { error } = await supabase
                        .from('body_weights')
                        .select('user_id')
                        .limit(1);

                    if (!error) {
                        set({ supabaseReady: true });

                        const pending = get().entries.filter((e) => !e._synced);
                        if (pending.length > 0) {
                            await get().syncPending();
                        }

                        const { data: remote } = await supabase
                            .from('body_weights')
                            .select('*')
                            .order('date', { ascending: false })
                            .limit(500);

                        if (remote && remote.length > 0) {
                            const mapped: BodyWeightEntry[] = remote.map((r: Record<string, unknown>) => ({
                                date: r.date as string,
                                weight: Number(r.weight),
                                userId: r.user_id as string,
                                _synced: true
                            }));

                            const local = get().entries;
                            const remoteKeys = new Set(mapped.map((e) => `${e.userId}|${e.date}`));
                            const localToKeep = local.filter((e) => !remoteKeys.has(`${e.userId}|${e.date}`));

                            const merged = [...mapped];
                            for (const localEntry of localToKeep) {
                                const existing = merged.find(
                                    (m) => m.userId === localEntry.userId && m.date === localEntry.date
                                );
                                if (!existing) {
                                    merged.push(localEntry);
                                }
                            }

                            set({ entries: merged });
                        }
                    }
                } catch {
                    set({ supabaseReady: false });
                }

                set({ _hydrated: true });
            },

            addEntry: (userId: string, weight: number) => {
                const today = new Date().toISOString().slice(0, 10);
                const existing = get().entries.find(
                    (e) => e.userId === userId && e.date === today
                );

                if (existing) {
                    set((state) => ({
                        entries: state.entries.map((e) =>
                            e.userId === userId && e.date === today
                                ? { ...e, weight, _synced: false }
                                : e
                        )
                    }));
                } else {
                    set((state) => ({
                        entries: [{ date: today, weight, userId, _synced: false }, ...state.entries]
                    }));
                }

                if (get().supabaseReady && navigator.onLine) {
                    supabase
                        .from('body_weights')
                        .upsert(
                            { user_id: userId, date: today, weight },
                            { onConflict: 'user_id,date' }
                        )
                        .then(({ error }) => {
                            if (!error) {
                                set((state) => ({
                                    entries: state.entries.map((e) =>
                                        e.userId === userId && e.date === today
                                            ? { ...e, _synced: true }
                                            : e
                                    )
                                }));
                            }
                        });
                }
            },

            getEntries: (userId: string) =>
                get().entries
                    .filter((e) => e.userId === userId)
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),

            getTodayEntry: (userId: string) =>
                get().entries.find(
                    (e) => e.userId === userId && e.date === new Date().toISOString().slice(0, 10)
                ),

            syncPending: async () => {
                if (!get().supabaseReady || !navigator.onLine) return;

                const pending = get().entries.filter((e) => !e._synced);
                if (pending.length === 0) return;

                const rows = pending.map((e) => ({
                    user_id: e.userId,
                    date: e.date,
                    weight: e.weight
                }));

                const { error } = await supabase
                    .from('body_weights')
                    .upsert(rows, { onConflict: 'user_id,date' });

                if (!error) {
                    const syncedKeys = new Set(pending.map((e) => `${e.userId}|${e.date}`));
                    set((state) => ({
                        entries: state.entries.map((e) =>
                            syncedKeys.has(`${e.userId}|${e.date}`)
                                ? { ...e, _synced: true }
                                : e
                        )
                    }));
                }
            }
        }),
        {
            name: 'onfit-body-weights',
            partialize: (state) => ({ entries: state.entries })
        }
    )
);
