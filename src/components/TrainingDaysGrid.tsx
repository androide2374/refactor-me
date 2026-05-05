'use client';

import { ArrowUpRight, Dumbbell, RefreshCw } from 'lucide-react';

import { exercises, getExercisesForDay, trainingDays } from '../data/training';

export default function TrainingDaysGrid() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trainingDays.map((day, index) => {
                const dayExercises = getExercisesForDay(day.exerciseOrder, exercises);

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
                                <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-foreground">
                                    {day.title}
                                </h3>
                                <p className="mt-1 text-sm font-medium" style={{ color: day.colorHex }}>
                                    {day.colorName}
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                                {dayExercises.length > 0 ? (
                                    <><Dumbbell className="h-3.5 w-3.5" />{dayExercises.length}</>
                                ) : (
                                    <RefreshCw className="h-3.5 w-3.5" />
                                )}
                            </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-foreground/86">{day.focus}</p>

                        <div className="mt-4 rounded-[1.2rem] border border-border/70 bg-background/75 p-3.5">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                                {index === 0 ? 'Empeza aca' : `Despues de ${trainingDays[index - 1].day}`}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {day.note}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                <span className="rounded-full bg-secondary/60 px-2 py-0.5 text-[11px] text-muted-foreground">+ Calentamiento especifico</span>
                            </div>
                            {dayExercises.length > 0 && (
                                <ul className="mt-3 grid gap-1.5">
                                    {dayExercises.map((ex) => (
                                        <li key={ex.name} className="flex items-center justify-between gap-2 rounded-lg bg-card/60 px-2.5 py-1.5 text-xs text-foreground/80">
                                            <span>{ex.nameEs}</span>
                                            <span className="text-muted-foreground">{ex.sets}x{ex.reps}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <a
                            href={`/dias/${day.slug}`}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                        >
                            Ver {day.day}
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </article>
                );
            })}
        </div>
    );
}
