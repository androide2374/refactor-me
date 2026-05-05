'use client';

import { useEffect, useState } from 'react';
import { RefreshCw, X } from 'lucide-react';

export default function PWAUpdateToast() {
    const [showReload, setShowReload] = useState(false);

    useEffect(() => {
        if (!('serviceWorker' in navigator)) return;

        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing) return;
            refreshing = true;
            window.location.reload();
        });

        async function checkForUpdate() {
            const registration = await navigator.serviceWorker.getRegistration();
            if (registration?.waiting) {
                setShowReload(true);
            }
        }

        checkForUpdate();
    }, []);

    useEffect(() => {
        if (!showReload) return;

        const timer = setTimeout(() => {
            setShowReload(false);
        }, 15000);

        return () => clearTimeout(timer);
    }, [showReload]);

    if (!showReload) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 z-[60] sm:left-auto sm:right-6 sm:w-80">
            <div className="rounded-[1.5rem] border border-border/70 bg-card/95 p-4 shadow-[0_20px_60px_rgba(18,38,31,0.22)] backdrop-blur">
                <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <RefreshCw className="h-5 w-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">Actualizacion disponible</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                            Hay una nueva version de la app. Recarga para aplicar los cambios.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
                                    navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
                                }
                                window.location.reload();
                            }}
                            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
                        >
                            <RefreshCw className="h-3.5 w-3.5" />
                            Recargar
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowReload(false)}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
