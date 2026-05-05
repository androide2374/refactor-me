'use client';

import { useEffect, useState } from 'react';
import { Scale, X } from 'lucide-react';

import { useAuthStore } from '../stores/authStore';
import { useBodyWeightStore } from '../stores/bodyWeightStore';

const PROMPT_KEY = 'onfit-last-weight-prompt';

export default function DailyWeightPrompt() {
    const { user, isAuthenticated, _hasHydrated } = useAuthStore();
    const { getTodayEntry, addEntry, _hydrated: bodyWeightHydrated } = useBodyWeightStore();

    const [show, setShow] = useState(false);
    const [weight, setWeight] = useState('');
    const [saved, setSaved] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!_hasHydrated || !isAuthenticated || !user || !bodyWeightHydrated) return;

        const timer = setTimeout(() => setReady(true), 800);
        return () => clearTimeout(timer);
    }, [_hasHydrated, isAuthenticated, user, bodyWeightHydrated]);

    useEffect(() => {
        if (!ready || !user) return;

        const today = new Date().toISOString().slice(0, 10);
        const lastPrompt = localStorage.getItem(PROMPT_KEY);
        const todayEntry = getTodayEntry(user.username);

        if (saved) {
            setShow(false);
            return;
        }

        if (todayEntry) {
            return;
        }

        if (lastPrompt === today) {
            return;
        }

        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, [ready, user, saved, getTodayEntry]);

    const handleSave = () => {
        const w = Number.parseFloat(weight);
        if (!w || w <= 0 || !user) return;

        addEntry(user.username, w);
        setSaved(true);
        setShow(false);
        localStorage.setItem(PROMPT_KEY, new Date().toISOString().slice(0, 10));
    };

    const handleSkip = () => {
        setShow(false);
        localStorage.setItem(PROMPT_KEY, new Date().toISOString().slice(0, 10));
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-40 flex items-end justify-center p-4 pb-8 sm:items-center">
            <div
                className="fixed inset-0 bg-[var(--overlay-color)] backdrop-blur-sm"
                onClick={handleSkip}
            />

            <div className="relative w-full max-w-sm rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_24px_80px_rgba(18,38,31,0.22)] animate-in slide-in-from-bottom-8">
                <button
                    type="button"
                    onClick={handleSkip}
                    className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-foreground"
                    aria-label="Cerrar"
                >
                    <X className="h-4 w-4" />
                </button>

                <div className="flex flex-col items-center gap-4 text-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 text-accent-foreground">
                        <Scale className="h-7 w-7" />
                    </span>
                    <div>
                        <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                            Registra tu peso
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Te ayuda a seguir la tendencia general. Solo aparece una vez por dia.
                        </p>
                    </div>
                </div>

                <div className="mt-5 space-y-3">
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                            Peso corporal (kg)
                        </label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                            placeholder="Ej: 78.5"
                            step="0.1"
                            min="30"
                            max="250"
                            className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary/40 focus:outline-none"
                            autoFocus
                        />
                    </div>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={handleSkip}
                            className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
                        >
                            No, gracias
                        </button>
                        <button
                            type="button"
                            onClick={handleSave}
                            disabled={!weight || Number.parseFloat(weight) <= 0}
                            className="flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-40"
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
