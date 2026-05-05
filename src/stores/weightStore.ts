import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { supabase } from '../lib/supabase';

export interface SetEntry {
    setNumber: number;
    weight: number;
    reps: number;
}

export interface WeightRecord {
    id: string;
    userId: string;
    date: string;
    exerciseName: string;
    sets: SetEntry[];
    notes: string;
    _synced?: boolean;
}

interface WeightStoreState {
    records: WeightRecord[];
    supabaseReady: boolean;
    _hydrated: boolean;

    init: () => Promise<void>;
    refresh: () => Promise<void>;
    addRecord: (record: Omit<WeightRecord, 'id' | '_synced'>) => Promise<void>;
    getRecords: (userId: string, exerciseName: string) => WeightRecord[];
    getLastRecord: (userId: string, exerciseName: string) => WeightRecord | undefined;
    deleteRecord: (id: string) => Promise<void>;
    syncPending: () => Promise<void>;
}

let migrationDone = false;
let onlineListenerRegistered = false;

function registerOnlineListener(syncFn: () => Promise<void>) {
    if (onlineListenerRegistered || typeof window === 'undefined') return;
    onlineListenerRegistered = true;

    window.addEventListener('online', () => {
        syncFn();
    });
}

export const useWeightStore = create<WeightStoreState>()(
    persist(
        (set, get) => ({
            records: [],
            supabaseReady: false,
            _hydrated: false,

            init: async () => {
                if (get()._hydrated) return;

                registerOnlineListener(() => get().syncPending());

                try {
                    const { error } = await supabase
                        .from('weight_records')
                        .select('id')
                        .limit(1);

                    if (!error) {
                        set({ supabaseReady: true });

                        if (!migrationDone) {
                            const localOnly = get().records.filter((r) => !r._synced);
                            if (localOnly.length > 0) {
                                await get().syncPending();
                            }
                            migrationDone = true;
                        }

                        const { data: remoteRecords } = await supabase
                            .from('weight_records')
                            .select('*')
                            .order('date', { ascending: false })
                            .limit(500);

                        if (remoteRecords && remoteRecords.length > 0) {
                            const remote: WeightRecord[] = remoteRecords.map((r: Record<string, unknown>) => ({
                                id: r.id as string,
                                userId: r.user_id as string,
                                date: r.date as string,
                                exerciseName: r.exercise_name as string,
                                sets: r.sets as SetEntry[],
                                notes: (r.notes as string) ?? '',
                                _synced: true
                            }));

                            const localRecords = get().records;
                            const remoteIds = new Set(remote.map((r) => r.id));
                            const localToKeep = localRecords.filter((r) => !remoteIds.has(r.id));

                            set({ records: [...remote, ...localToKeep] });
                        }
                    }
                } catch {
                    set({ supabaseReady: false });
                }

                set({ _hydrated: true });
            },

            refresh: async () => {
                try {
                    const { data: remoteRecords } = await supabase
                        .from('weight_records')
                        .select('*')
                        .order('date', { ascending: false })
                        .limit(500);

                    if (remoteRecords && remoteRecords.length > 0) {
                        const remote: WeightRecord[] = remoteRecords.map((r: Record<string, unknown>) => ({
                            id: r.id as string,
                            userId: r.user_id as string,
                            date: r.date as string,
                            exerciseName: r.exercise_name as string,
                            sets: r.sets as SetEntry[],
                            notes: (r.notes as string) ?? '',
                            _synced: true
                        }));

                        const localRecords = get().records;
                        const remoteIds = new Set(remote.map((r) => r.id));
                        const localPending = localRecords.filter((r) => !r._synced);
                        const localToKeep = localRecords.filter(
                            (r) => r._synced && !remoteIds.has(r.id)
                        );

                        set({ records: [...remote, ...localPending, ...localToKeep] });
                    }
                } catch {
                    // silent
                }
            },

            addRecord: async (record) => {
                const newRecord: WeightRecord = {
                    ...record,
                    id: crypto.randomUUID(),
                    _synced: false
                };

                set((state) => ({
                    records: [newRecord, ...state.records]
                }));

                if (get().supabaseReady && navigator.onLine) {
                    const { error } = await supabase
                        .from('weight_records')
                        .insert({
                            id: newRecord.id,
                            user_id: newRecord.userId,
                            exercise_name: newRecord.exerciseName,
                            date: newRecord.date,
                            sets: newRecord.sets,
                            notes: newRecord.notes
                        });

                    if (!error) {
                        set((state) => ({
                            records: state.records.map((r) =>
                                r.id === newRecord.id ? { ...r, _synced: true } : r
                            )
                        }));
                    }
                }
            },

            getRecords: (userId, exerciseName) =>
                get().records
                    .filter((r) => r.userId === userId && r.exerciseName === exerciseName)
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),

            getLastRecord: (userId, exerciseName) => {
                const records = get().records
                    .filter((r) => r.userId === userId && r.exerciseName === exerciseName)
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                return records[0];
            },

            deleteRecord: async (id) => {
                set((state) => ({
                    records: state.records.filter((r) => r.id !== id)
                }));

                if (get().supabaseReady && navigator.onLine) {
                    await supabase
                        .from('weight_records')
                        .delete()
                        .eq('id', id);
                }
            },

            syncPending: async () => {
                if (!get().supabaseReady || !navigator.onLine) return;

                const pending = get().records.filter((r) => !r._synced);
                if (pending.length === 0) return;

                const rows = pending.map((r) => ({
                    id: r.id,
                    user_id: r.userId,
                    exercise_name: r.exerciseName,
                    date: r.date,
                    sets: r.sets,
                    notes: r.notes
                }));

                const { error } = await supabase
                    .from('weight_records')
                    .upsert(rows, { onConflict: 'id' });

                if (!error) {
                    set((state) => ({
                        records: state.records.map((r) =>
                            pending.some((p) => p.id === r.id) ? { ...r, _synced: true } : r
                        )
                    }));
                }
            }
        }),
        {
            name: 'onfit-weights',
            partialize: (state) => ({ records: state.records })
        }
    )
);

export const getMaxWeight = (record: WeightRecord): number =>
    Math.max(...record.sets.map((s) => s.weight));

export const getAvgWeight = (record: WeightRecord): number =>
    record.sets.reduce((sum, s) => sum + s.weight, 0) / record.sets.length;
