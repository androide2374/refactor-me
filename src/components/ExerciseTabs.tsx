'use client';

import { useMemo, useState } from 'react';
import { Activity, Brain, CirclePlay, Dumbbell, HeartPulse, Info, ShieldAlert, X } from 'lucide-react';

import { exercises, progressionRules, trainingDays } from '../data/training-plan';
import { getExercisesForDay } from '../data/training/sessions';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function ExerciseTabs() {
    const [openExerciseName, setOpenExerciseName] = useState<string | null>(null);

    const selectedExercise = useMemo(() => {
        if (!openExerciseName) {
            return null;
        }

        return exercises.find((exercise) => exercise.name === openExerciseName) ?? null;
    }, [openExerciseName]);

    const getRuleIcon = (title: string) => {
        if (title === 'Alerta de salud') {
            return <ShieldAlert className="h-4 w-4 text-destructive" />;
        }

        if (title === 'Validacion de fatiga') {
            return <HeartPulse className="h-4 w-4 text-primary" />;
        }

        return <Activity className="h-4 w-4 text-primary" />;
    };

    const getDayForExercise = (exerciseDayId: string) =>
        trainingDays.find((day) => day.id === exerciseDayId);

    return (
        <div className="rounded-[1.75rem] bg-card/50 p-3 sm:p-4">
            <Tabs defaultValue="sesiones" className="w-full">
                <TabsList>
                    <TabsTrigger value="sesiones">Sesiones</TabsTrigger>
                    <TabsTrigger value="ejercicios">Ejercicios</TabsTrigger>
                    <TabsTrigger value="reglas">Reglas</TabsTrigger>
                </TabsList>

                <TabsContent value="sesiones">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {trainingDays.map((day) => {
                            const dayExercises = getExercisesForDay(day.exerciseOrder, exercises);

                            return (
                                <Card key={day.id} className="bg-background/78">
                                    <div
                                        className="absolute left-0 top-0 h-1 w-full rounded-t-[1.5rem]"
                                        style={{ backgroundColor: day.colorHex }}
                                        aria-hidden
                                    />
                                    <CardHeader>
                                        <div className="flex items-center justify-between gap-3">
                                            <Badge>{day.day}</Badge>
                                            <Activity className="h-4 w-4 text-primary" />
                                        </div>
                                        <CardTitle>{day.title}</CardTitle>
                                        <CardDescription>{day.focus}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-sm leading-6 text-foreground/86">{day.note}</p>
                                        <div className="rounded-[1.15rem] border border-border/70 bg-card/80 p-3 text-xs leading-5 text-muted-foreground">
                                            {dayExercises.length} ejercicios · {day.warmup.length} pasos de calentamiento · 10 min cardio entrada, 15 min salida
                                        </div>
                                        <a
                                            href={`/dias/${day.slug}`}
                                            className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary/35"
                                        >
                                            Abrir {day.day}
                                        </a>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </TabsContent>

                <TabsContent value="ejercicios">
                    <div className="grid gap-4 lg:grid-cols-2">
                        {exercises.map((exercise) => {
                            const day = getDayForExercise(exercise.dayId);

                            return (
                                <Card key={exercise.name} className="bg-background/78">
                                    <CardHeader>
                                        <img
                                            src={exercise.imageUrl}
                                            alt={exercise.nameEs}
                                            loading="lazy"
                                            onError={(event) => {
                                                const img = event.currentTarget;
                                                if (img.src !== exercise.imageFallbackUrl) {
                                                    img.src = exercise.imageFallbackUrl;
                                                }
                                            }}
                                            className="h-40 w-full rounded-[1.1rem] object-cover"
                                        />
                                        <div className="flex items-center justify-between gap-3">
                                            {day && (
                                                <Badge variant="secondary" style={{ backgroundColor: day.colorHex + '22', color: day.colorHex }}>
                                                    {day.day} · {day.colorName}
                                                </Badge>
                                            )}
                                            <Dumbbell className="h-4 w-4 text-primary" />
                                        </div>
                                        <CardTitle>{exercise.nameEs}</CardTitle>
                                        <CardDescription>{exercise.muscleGroup}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid gap-2 text-sm text-foreground/86">
                                            <p>
                                                <strong>Prescripcion:</strong> {exercise.sets} series x {exercise.reps === 1 ? '30 segundos' : `${exercise.reps} repeticiones`}.
                                            </p>
                                            <p>
                                                <strong>Cues:</strong> {exercise.cues.join(' · ')}.
                                            </p>
                                            <p>
                                                <strong>Descripcion:</strong> {exercise.description}
                                            </p>
                                        </div>
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            <a
                                                href={exercise.videoUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                                            >
                                                <CirclePlay className="h-4 w-4" />
                                                Video ejemplo
                                            </a>
                                            <button
                                                type="button"
                                                onClick={() => setOpenExerciseName(exercise.name)}
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40"
                                            >
                                                <Info className="h-4 w-4" />
                                                Info tecnica
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </TabsContent>

                <TabsContent value="reglas">
                    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                        <Card className="bg-background/78">
                            <CardHeader>
                                <div className="flex items-center justify-between gap-3">
                                    <Badge variant="caution">Lectura rapida</Badge>
                                    <Brain className="h-4 w-4 text-primary" />
                                </div>
                                <CardTitle>Antes de tocar peso</CardTitle>
                                <CardDescription>Directo, operativo y sin optimismo vacio.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm leading-6 text-foreground/86">
                                <p><strong>Si dormiste mal:</strong> mantene carga, baja ego, cuida tecnica.</p>
                                <p><strong>Si todo se sintio facil:</strong> confirmalo dos sesiones seguidas y recien despues subis 5% a 10%.</p>
                                <p><strong>Si la sesion se salto:</strong> retoma en la siguiente ventana disponible, sin castigo ni compensaciones absurdas.</p>
                            </CardContent>
                        </Card>

                        <div className="grid gap-4">
                            {progressionRules.map((rule) => (
                                <Card key={rule.title} className="bg-background/78">
                                    <CardHeader>
                                        <div className="flex items-center justify-between gap-3">
                                            <Badge variant="outline">Regla</Badge>
                                            {getRuleIcon(rule.title)}
                                        </div>
                                        <CardTitle>{rule.title}</CardTitle>
                                        <CardDescription>{rule.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            {selectedExercise && (
                <dialog open className="app-modal fixed inset-0 z-50 items-center justify-center p-4" aria-label={`Informacion ${selectedExercise.name}`}>
                    <div className="w-full max-w-2xl rounded-[1.75rem] border border-border/80 bg-card p-5 shadow-[0_24px_80px_rgba(18,38,31,0.32)] sm:p-6">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Guia rapida</p>
                                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-foreground">{selectedExercise.nameEs}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">{selectedExercise.muscleGroup}</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setOpenExerciseName(null)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-foreground"
                                aria-label="Cerrar"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <img
                            src={selectedExercise.imageUrl}
                            alt={`Demostracion ${selectedExercise.nameEs}`}
                            loading="lazy"
                            onError={(event) => {
                                const img = event.currentTarget;
                                if (img.src !== selectedExercise.imageFallbackUrl) {
                                    img.src = selectedExercise.imageFallbackUrl;
                                }
                            }}
                            className="mt-4 h-52 w-full rounded-[1.15rem] object-cover"
                        />

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Como se hace</p>
                                <ul className="mt-3 grid gap-2 text-sm leading-6 text-foreground/88">
                                    {selectedExercise.cues.map((cue) => (
                                        <li key={cue.slice(0, 20)}>· {cue}</li>
                                    ))}
                                </ul>
                                <p className="mt-3 text-sm leading-6 text-foreground/86">{selectedExercise.description}</p>
                            </div>
                            <div className="rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Errores comunes</p>
                                <ul className="mt-3 grid gap-2 text-sm leading-6 text-foreground/88">
                                    {selectedExercise.commonMistakes.map((mistake) => (
                                        <li key={mistake.slice(0, 20)}>· {mistake}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4 rounded-[1.2rem] border border-border/70 bg-background/70 p-4 text-sm leading-6 text-foreground/88">
                            <strong>Prescripcion:</strong> {selectedExercise.sets} series x {selectedExercise.reps === 1 ? '30 segundos' : `${selectedExercise.reps} reps`} · Descanso {selectedExercise.restSeconds}s entre series.
                        </div>

                        <div className="mt-5 flex flex-wrap justify-end gap-2">
                            <a
                                href={selectedExercise.videoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                            >
                                <CirclePlay className="h-4 w-4" />
                                Abrir video
                            </a>
                            <button
                                type="button"
                                onClick={() => setOpenExerciseName(null)}
                                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
}
