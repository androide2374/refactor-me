'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { LogIn, Loader2, UserRound } from 'lucide-react';

import { useAuthStore } from '../stores/authStore';
import { useBodyWeightStore } from '../stores/bodyWeightStore';
import { useWeightStore } from '../stores/weightStore';

function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Cargando...</p>
            </div>
        </div>
    );
}

export default function AuthGuard({ children }: { children: ReactNode }) {
    const { _hasHydrated, isAuthenticated, user, login } = useAuthStore();
    const initWeights = useWeightStore((s) => s.init);
    const initBodyWeights = useBodyWeightStore((s) => s.init);
    const [username, setUsername] = useState('plugo');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (isAuthenticated && user) {
            initWeights();
            initBodyWeights();
        }
    }, [isAuthenticated, user, initWeights, initBodyWeights]);

    if (!_hasHydrated) {
        return <LoadingScreen />;
    }

    if (isAuthenticated && user) {
        return <>{children}</>;
    }

    const handleLogin = () => {
        setError('');
        const success = login(username, password);
        if (!success) {
            setError('Usuario o contrasena incorrectos');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--overlay-color)] backdrop-blur-sm p-4">
            <div className="w-full max-w-sm rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_24px_80px_rgba(18,38,31,0.22)]">
                <div className="flex flex-col items-center gap-4 text-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <UserRound className="h-8 w-8" />
                    </span>
                    <div>
                        <h1 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">OnFit Focus</h1>
                        <p className="mt-1 text-sm text-muted-foreground">Elegi tu usuario para empezar</p>
                    </div>
                </div>

                <div className="mt-6 space-y-4">
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Usuario</label>
                        <select
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-foreground focus:border-primary/40 focus:outline-none"
                        >
                            <option value="plugo">Pablo (plugo)</option>
                            <option value="yamylaj">Yamila (yamylaj)</option>
                        </select>
                    </div>
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Contrasena</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                            placeholder="••••••••"
                            className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary/40 focus:outline-none"
                        />
                    </div>

                    {error && (
                        <p className="rounded-xl bg-destructive/10 px-3 py-2 text-xs font-medium text-destructive">{error}</p>
                    )}

                    <button
                        type="button"
                        onClick={handleLogin}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                    >
                        <LogIn className="h-4 w-4" />
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    );
}
