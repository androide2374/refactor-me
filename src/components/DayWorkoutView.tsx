'use client';

import { Dumbbell, Gauge, LayoutGrid, LayoutList } from 'lucide-react';

import type { Exercise } from '../data/training/exercises';
import { useViewStore } from '../stores/viewStore';
import WeightLogger from './WeightLogger';

interface Props {
    exercises: Exercise[];
    dayPlan: { day: string; title: string };
}

function formatReps(exercise: Exercise): string {
    return exercise.isTimed ? `${exercise.reps}s` : `${exercise.reps} reps`;
}

export default function DayWorkoutView({ exercises, dayPlan }: Props) {
    const viewMode = useViewStore((s) => s.viewMode);
    const setViewMode = useViewStore((s) => s.setViewMode);

    return (
        <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Ejercicios del dia</p>
                    <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                        {exercises.length} ejercicios para {dayPlan.day}
                    </h2>
                </div>

                <div className="inline-flex gap-1 rounded-[1rem] border border-border/70 bg-background/80 p-1">
                    <button
                        type="button"
                        onClick={() => setViewMode('cards')}
                        className={`inline-flex items-center gap-1.5 rounded-[0.9rem] px-3 py-2 text-xs font-semibold transition ${
                            viewMode === 'cards'
                                ? 'bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(22,93,72,0.28)]'
                                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                        }`}
                    >
                        <LayoutGrid className="h-3.5 w-3.5" />
                        Tarjetas
                    </button>
                    <button
                        type="button"
                        onClick={() => setViewMode('table')}
                        className={`inline-flex items-center gap-1.5 rounded-[0.9rem] px-3 py-2 text-xs font-semibold transition ${
                            viewMode === 'table'
                                ? 'bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(22,93,72,0.28)]'
                                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                        }`}
                    >
                        <LayoutList className="h-3.5 w-3.5" />
                        Tabla simple
                    </button>
                </div>
            </div>

            {viewMode === 'cards' ? (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {exercises.map((exercise) => (
                        <article key={exercise.name} className="rounded-[1.6rem] border border-border/70 bg-card/80 p-4 shadow-[0_10px_30px_rgba(18,38,31,0.06)]">
                            <img
                                src={exercise.imageUrl}
                                alt={exercise.nameEs}
                                loading="lazy"
                                onError={(e) => {
                                    const img = e.currentTarget;
                                    if (img.src !== exercise.imageFallbackUrl) {
                                        img.src = exercise.imageFallbackUrl;
                                    }
                                }}
                                className="h-44 w-full rounded-[1rem] object-cover"
                            />
                            <div className="mt-3 flex items-start justify-between gap-3">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground">{exercise.nameEs}</h3>
                                    <p className="text-sm text-muted-foreground">{exercise.muscleGroup}</p>
                                </div>
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Dumbbell className="h-4 w-4" />
                                </span>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-foreground/80">
                                <span className="rounded-full bg-secondary px-3 py-1">{exercise.sets} series</span>
                                <span className="rounded-full bg-secondary px-3 py-1">{formatReps(exercise)}</span>
                                <span className="rounded-full bg-secondary px-3 py-1">{exercise.restSeconds}s desc</span>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-muted-foreground">{exercise.description}</p>

                            <details className="mt-4 rounded-[1rem] border border-border/70 bg-background/70 p-3">
                                <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition hover:border-primary/35">
                                    <Gauge className="h-3.5 w-3.5" />
                                    Tecnica y errores
                                </summary>
                                <div className="mt-3 space-y-3">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Como se hace</p>
                                        <ul className="mt-2 grid gap-1 text-xs text-muted-foreground">
                                            {exercise.cues.map((cue) => (
                                                <li key={cue.slice(0, 20)}>· {cue}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-foreground">Errores comunes</p>
                                        <ul className="mt-2 grid gap-1 text-xs text-muted-foreground">
                                            {exercise.commonMistakes.map((mistake) => (
                                                <li key={mistake.slice(0, 20)}>· {mistake}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </details>

                            <a
                                href={exercise.videoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                            >
                                Ver video en YouTube
                            </a>

                            <WeightLogger
                                exerciseName={exercise.name}
                                exerciseNameEs={exercise.nameEs}
                                prescribedSets={exercise.sets}
                                prescribedReps={exercise.reps}
                            />
                        </article>
                    ))}
                </div>
            ) : (
                <div className="overflow-hidden rounded-[1.6rem] border border-border/70 bg-card/80 shadow-[0_10px_30px_rgba(18,38,31,0.06)]">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-border/70 bg-background/60">
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                                    Musculo / Sector
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                                    Ejercicio
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                                    Series
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                                    Reps / Tiempo
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                                    Desc
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {exercises.map((exercise, index) => (
                                <tr
                                    key={exercise.name}
                                    className={`border-b border-border/50 transition hover:bg-background/40 ${
                                        index % 2 === 0 ? 'bg-background/20' : 'bg-background/40'
                                    }`}
                                >
                                    <td className="px-4 py-4">
                                        <span className="text-base font-bold text-foreground">{exercise.muscleGroup}</span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-semibold text-foreground">{exercise.nameEs}</span>
                                            <WeightLogger
                                                exerciseName={exercise.name}
                                                exerciseNameEs={exercise.nameEs}
                                                prescribedSets={exercise.sets}
                                                prescribedReps={exercise.reps}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <span className="inline-flex items-center justify-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/80">
                                            {exercise.sets}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <span className="inline-flex items-center justify-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/80">
                                            {formatReps(exercise)}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <span className="text-xs text-muted-foreground">{exercise.restSeconds}s</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}
