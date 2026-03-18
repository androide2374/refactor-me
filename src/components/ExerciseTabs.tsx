'use client';

import { Activity, Brain, Dumbbell, HeartPulse, ShieldAlert } from 'lucide-react';

import { exercises, progressionRules, weeklySchedule } from '../data/training-plan';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function ExerciseTabs() {
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
									<div className="flex items-center justify-between gap-3">
										<Badge variant="secondary">{exercise.block}</Badge>
										<Dumbbell className="h-4 w-4 text-primary" />
									</div>
									<CardTitle>{exercise.name}</CardTitle>
									<CardDescription>{exercise.machine}</CardDescription>
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
		</div>
	);
}