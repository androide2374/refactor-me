'use client';

import { useMemo, useState } from 'react';
import { Clock3, Droplets, Info, X } from 'lucide-react';

import { sessionBlocks } from '../data/training-plan';

export default function TrainingBlocksGrid() {
    const [openBlockId, setOpenBlockId] = useState<string | null>(null);

    const selectedBlock = useMemo(() => {
        if (!openBlockId) {
            return null;
        }

        return sessionBlocks.find((block) => block.id === openBlockId) ?? null;
    }, [openBlockId]);

    return (
        <>
            <div className="grid gap-4 xl:grid-cols-5">
                {sessionBlocks.map((block) => (
                    <article key={block.id} className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-[0_10px_30px_rgba(18,38,31,0.06)]">
                        <div className="flex items-center justify-between gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                                {block.id}
                            </span>
                            <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                                {block.duration} min
                            </span>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-foreground">{block.name}</h3>
                        <p className="mt-2 text-sm font-medium text-primary">{block.intensity}</p>
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">{block.focus}</p>
                        <p className="mt-4 rounded-[1.25rem] border border-border/70 bg-background/80 p-3 text-sm leading-6 text-foreground/86">
                            {block.prescription}
                        </p>
                        <button
                            type="button"
                            onClick={() => setOpenBlockId(block.id)}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-background"
                        >
                            <Info className="h-4 w-4" />
                            Info del bloque
                        </button>
                    </article>
                ))}
            </div>

            {selectedBlock && (
                <dialog open className="app-modal fixed inset-0 z-50 items-center justify-center p-4" aria-label={`Info ${selectedBlock.name}`}>
                    <div className="w-full max-w-2xl rounded-[1.75rem] border border-border/80 bg-card p-5 shadow-[0_24px_80px_rgba(18,38,31,0.32)] sm:p-6">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Bloque {selectedBlock.id}</p>
                                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-foreground">{selectedBlock.name}</h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => setOpenBlockId(null)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-foreground"
                                aria-label="Cerrar"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
                                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                                    <Clock3 className="h-3.5 w-3.5" />
                                    Dosis de trabajo
                                </p>
                                <p className="mt-2 text-sm leading-6 text-foreground/88">{selectedBlock.duration} min · {selectedBlock.intensity}</p>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">{selectedBlock.prescription}</p>
                            </div>
                            <div className="rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
                                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                                    <Droplets className="h-3.5 w-3.5" />
                                    Hidratacion
                                </p>
                                <p className="mt-2 text-sm leading-6 text-foreground/88">Sorbos cortos entre series y chequeo al cerrar el bloque.</p>
                                <p className="mt-3 text-sm leading-6 text-muted-foreground">Con semaglutida, evita entrenar largo tiempo sin tomar agua.</p>
                            </div>
                        </div>

                        <div className="mt-4 rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Checkpoints de calidad</p>
                            <ul className="mt-3 grid gap-2 text-sm leading-6 text-foreground/88">
                                {selectedBlock.checkpoints.map((checkpoint) => (
                                    <li key={checkpoint}>• {checkpoint}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-5 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setOpenBlockId(null)}
                                className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
}