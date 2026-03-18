'use client';

import { useMemo, useState } from 'react';
import { Activity, Brain, CirclePlay, Dumbbell, HeartPulse, Info, ShieldAlert, X } from 'lucide-react';

import { exercises, progressionRules, weeklySchedule } from '../data/training-plan';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
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

    return (
        <div className="rounded-[1.75rem] bg-card/50 p-3 sm:p-4">
            <Tabs defaultValue="sesiones" className="w-full">
                <TabsList>
                    <TabsTrigger value="sesiones">Sesiones</TabsTrigger>
                    <TabsTrigger value="ejercicios">Ejercicios</TabsTrigger>
                    <TabsTrigger value="reglas">Reglas</TabsTrigger>
                </TabsList>

                <TabsContent value="sesiones">
                    <div className="grid gap-4 lg:grid-cols-3">
                        {weeklySchedule.map((session) => (
                            <Card key={session.day} className="bg-background/78">
                                <CardHeader>
                                    <div className="flex items-center justify-between gap-3">
                                        <Badge>{session.day}</Badge>
                                        <Activity className="h-4 w-4 text-primary" />
                                    </div>
                                    <CardTitle>{session.label}</CardTitle>
                                    <CardDescription>{session.focus}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm leading-6 text-foreground/86">{session.note}</p>
                                    <div className="rounded-[1.15rem] border border-border/70 bg-card/80 p-3 text-sm leading-6 text-muted-foreground">
                                        Checklist minima: agua lista, desayuno liviano, zapatillas estables y cero prisa entre series.
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="ejercicios">
                    <div className="grid gap-4 lg:grid-cols-2">
                        {exercises.map((exercise) => (
                            <Card key={exercise.name} className="bg-background/78">
                                <CardHeader>
                                    <img
                                        src={exercise.imageUrl}
                                        alt={`Referencia visual de ${exercise.nameEsAr}`}
                                        loading="lazy"
                                        className="h-40 w-full rounded-[1.1rem] object-cover"
                                    />
                                    <div className="flex items-center justify-between gap-3">
                                        <Badge variant="secondary">{exercise.block}</Badge>
                                        <Dumbbell className="h-4 w-4 text-primary" />
                                    </div>
                                    <CardTitle>{exercise.nameEsAr}</CardTitle>
                                    <CardDescription>{exercise.name} · {exercise.machine}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
                                            <span>Carga tecnica inicial</span>
                                            <span>{exercise.learningLoad}%</span>
                                        </div>
                                        <Progress value={exercise.learningLoad} />
                                    </div>
                                    <div className="grid gap-2 text-sm text-foreground/86">
										<p>
											<strong>Como lo buscas en el gym:</strong> {exercise.searchAliasesEsAr.join(' · ')}.
										</p>
                                        <p>
                                            <strong>Prescripcion:</strong> {exercise.sets} series x {exercise.reps === 1 ? '20-30 segundos' : `${exercise.reps} repeticiones`}.
                                        </p>
                                        <p>
                                            <strong>Cue principal:</strong> {exercise.cues.join(' · ')}.
                                        </p>
                                        <p>
                                            <strong>Error a vigilar:</strong> {exercise.riskNote}
                                        </p>
                                        <p>
                                            <strong>Tip practico:</strong> {exercise.beginnerTip}
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
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="reglas">
                    <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                        <Card className="bg-background/78">
                            <CardHeader>
                                <div className="flex items-center justify-between gap-3">
                                    <Badge variant="caution">Code review del dia</Badge>
                                    <Brain className="h-4 w-4 text-primary" />
                                </div>
                                <CardTitle>Lectura rapida antes de tocar peso</CardTitle>
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
                                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-foreground">{selectedExercise.nameEsAr}</h3>
                                <p className="mt-1 text-sm text-muted-foreground">{selectedExercise.name} · {selectedExercise.machine}</p>
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
                            alt={`Demostracion ${selectedExercise.nameEsAr}`}
                            loading="lazy"
                            className="mt-4 h-52 w-full rounded-[1.15rem] object-cover"
                        />

						<div className="mt-4 rounded-[1.2rem] border border-border/70 bg-background/70 p-4 text-sm leading-6 text-foreground/88">
							<strong>Nombres para buscar:</strong> {selectedExercise.searchAliasesEsAr.join(' · ')}.
						</div>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Como se hace</p>
                                <ul className="mt-3 grid gap-2 text-sm leading-6 text-foreground/88">
                                    {selectedExercise.howTo.map((step) => (
                                        <li key={step}>• {step}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-[1.2rem] border border-border/70 bg-background/70 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Errores comunes</p>
                                <ul className="mt-3 grid gap-2 text-sm leading-6 text-foreground/88">
                                    {selectedExercise.commonMistakes.map((mistake) => (
                                        <li key={mistake}>• {mistake}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-4 rounded-[1.2rem] border border-border/70 bg-background/70 p-4 text-sm leading-6 text-foreground/88">
                            <strong>Recordatorio clave:</strong> si energia &lt; 5/10 o sueno &lt; 6h, la sesion pasa a mantenimiento y no se sube peso.
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