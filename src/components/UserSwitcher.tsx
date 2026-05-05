'use client';

import { LogOut, UserRound } from 'lucide-react';

import { useAuthStore } from '../stores/authStore';

export default function UserSwitcher() {
    const { user, isAuthenticated, switchUser, logout } = useAuthStore();

    if (!isAuthenticated || !user) return null;

    return (
        <div className="inline-flex items-center gap-2 rounded-[1.25rem] border border-border/70 bg-card/80 px-3 py-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <UserRound className="h-3.5 w-3.5 text-primary" />
                {user.displayName}
            </span>
            <div className="flex gap-1 rounded-[0.9rem] bg-background/80 p-0.5">
                <button
                    type="button"
                    onClick={() => switchUser('plugo')}
                    className={`rounded-[0.7rem] px-2.5 py-1 text-[11px] font-semibold transition ${
                        user.username === 'plugo'
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    Pablo
                </button>
                <button
                    type="button"
                    onClick={() => switchUser('yamylaj')}
                    className={`rounded-[0.7rem] px-2.5 py-1 text-[11px] font-semibold transition ${
                        user.username === 'yamylaj'
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                    Yamila
                </button>
            </div>
            <button
                type="button"
                onClick={logout}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground/60 transition hover:text-destructive"
                aria-label="Cerrar sesion"
            >
                <LogOut className="h-3.5 w-3.5" />
            </button>
        </div>
    );
}
