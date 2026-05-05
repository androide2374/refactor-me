'use client';

import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    prompt(): Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export default function PWAInstallPrompt() {
    const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setInstallEvent(e as BeforeInstallPromptEvent);

            const dismissed = localStorage.getItem('pwa-install-dismissed');
            if (!dismissed || Date.now() - Number(dismissed) > 1000 * 60 * 60 * 24 * 7) {
                setShowPrompt(true);
            }
        };

        window.addEventListener('beforeinstallprompt', handler);

        const installedHandler = () => {
            setShowPrompt(false);
            setInstallEvent(null);
            localStorage.removeItem('pwa-install-dismissed');
        };

        window.addEventListener('appinstalled', installedHandler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
            window.removeEventListener('appinstalled', installedHandler);
        };
    }, []);

    if (!showPrompt || !installEvent) return null;

    const handleInstall = async () => {
        await installEvent.prompt();
        const { outcome } = await installEvent.userChoice;
        if (outcome === 'accepted') {
            setShowPrompt(false);
            localStorage.removeItem('pwa-install-dismissed');
        }
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        localStorage.setItem('pwa-install-dismissed', String(Date.now()));
    };

    return (
        <div className="fixed bottom-6 left-6 right-6 z-[60] sm:left-auto sm:right-6 sm:w-80">
            <div className="rounded-[1.5rem] border border-border/70 bg-card/95 p-4 shadow-[0_20px_60px_rgba(18,38,31,0.22)] backdrop-blur">
                <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/12 text-accent-foreground">
                        <Download className="h-5 w-5" />
                    </span>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">Instalar OnFit Focus</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                            Agrega la app a tu pantalla de inicio para acceder rapido a tu plan de entrenamiento.
                        </p>
                        <button
                            type="button"
                            onClick={handleInstall}
                            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90"
                        >
                            <Download className="h-3.5 w-3.5" />
                            Instalar
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={handleDismiss}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
