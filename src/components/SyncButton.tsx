'use client';

import { useState } from 'react';
import { Check, RefreshCw } from 'lucide-react';

import { useBodyWeightStore } from '../stores/bodyWeightStore';
import { useWeightStore } from '../stores/weightStore';

export default function SyncButton() {
    const [syncing, setSyncing] = useState(false);
    const [done, setDone] = useState(false);
    const refreshWeights = useWeightStore((s) => s.refresh);
    const refreshBody = useBodyWeightStore((s) => s.refresh);

    const handleSync = async () => {
        if (syncing) return;
        setSyncing(true);
        setDone(false);

        await Promise.all([refreshWeights(), refreshBody()]);

        setSyncing(false);
        setDone(true);
        setTimeout(() => setDone(false), 2000);
    };

    return (
        <button
            type="button"
            onClick={handleSync}
            disabled={syncing}
            className="inline-flex items-center gap-2 rounded-[1.25rem] border border-border/70 bg-card/80 px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary/35 hover:bg-background/85 disabled:opacity-50"
            aria-label="Recargar datos desde la nube"
        >
            {done ? (
                <Check className="h-4 w-4 text-primary" />
            ) : (
                <RefreshCw className={`h-4 w-4 ${syncing ? 'animate-spin' : ''}`} />
            )}
            <span className="hidden sm:inline">{done ? 'Actualizado' : syncing ? 'Sincronizando' : 'Sincronizar'}</span>
        </button>
    );
}
