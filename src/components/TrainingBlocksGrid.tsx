'use client';

import { ArrowUpRight, Clock3, Layers3 } from 'lucide-react';

import { exercises, trainingDays } from '../data/training-plan';

export default function TrainingBlocksGrid() {
    return (
        <div className="grid gap-4 lg:grid-cols-3">
            {trainingDays.map((day) => {
                const dayExercises = exercises.filter((exercise) => day.exerciseOrder.includes(exercise.name));

                return (
                    <article
                        key={day.id}
                        className="relative overflow-hidden rounded-[1.7rem] border border-border/70 bg-card/85 p-5 shadow-[0_14px_40px_rgba(18,38,31,0.08)]"
                    >
                        <div
                            className="absolute left-0 top-0 h-1.5 w-full"
                            style={{ backgroundColor: day.colorHex }}
                            aria-hidden
                        />

                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-sm font-semibold text-foreground/85">{day.day}</p>
                                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-foreground">{day.label}</h3>
                                <p className="mt-1 text-sm font-medium" style={{ color: day.colorHex }}>
                                    {day.colorName}
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                                <Clock3 className="h-3.5 w-3.5" />
                                60 min
                            </span>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-foreground/86">{day.focus}</p>

                        <div className="mt-4 rounded-[1.2rem] border border-border/70 bg-background/75 p-3.5">
                            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                                <Layers3 className="h-3.5 w-3.5" />
                                Bloques del dia
                            </p>
                            <ul className="mt-3 grid gap-2 text-sm text-foreground/86">
                                {day.blocks.map((block) => (
                                    <li key={block.id} className="flex items-center justify-between gap-2 rounded-xl bg-card/70 px-3 py-2">
                                        <span>{block.name}</span>
                                        <span className="text-xs text-muted-foreground">{block.duration} min</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="mt-4 text-xs text-muted-foreground">
                            {dayExercises.length} ejercicios con foto y guia tecnica en su pagina especifica.
                        </p>

                        <a
                            href={`/dias/${day.slug}`}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                        >
                            Ver {day.label}
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </article>
                );
            })}
        </div>
    );
}
