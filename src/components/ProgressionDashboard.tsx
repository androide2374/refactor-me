'use client';

import { useEffect, useMemo, useState } from 'react';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';
import { BarChart3, Loader2, Scale, TrendingDown, TrendingUp } from 'lucide-react';

import { useAuthStore } from '../stores/authStore';
import { useBodyWeightStore } from '../stores/bodyWeightStore';
import { getAvgWeight, getMaxWeight, useWeightStore } from '../stores/weightStore';
import { exercises } from '../data/training-plan';

const tooltipStyles = {
    border: '1px solid rgba(20, 34, 26, 0.12)',
    borderRadius: '14px',
    backgroundColor: 'rgba(255, 250, 244, 0.95)',
    boxShadow: '0 14px 40px rgba(18, 38, 31, 0.08)',
    fontSize: '12px',
    padding: '8px 10px'
};

function BodyWeightChart({ userId }: { userId: string }) {
    const { getEntries } = useBodyWeightStore();
    const entries = getEntries(userId);

    const chartData = useMemo(
        () =>
            entries.map((e) => ({
                date: e.date.slice(5),
                fullDate: e.date,
                peso: e.weight
            })),
        [entries]
    );

    if (chartData.length === 0) {
        return (
            <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5">
                <p className="text-sm font-semibold text-foreground">Peso corporal</p>
                <p className="mt-6 text-center text-sm text-muted-foreground pb-4">
                    Aun no hay registros de peso corporal. Usa el prompt diario o carga manualmente.
                </p>
            </div>
        );
    }

    const first = chartData[0].peso;
    const last = chartData[chartData.length - 1].peso;
    const diff = last - first;
    const trend = diff < 0 ? 'bajando' : diff > 0 ? 'subiendo' : 'estable';

    return (
        <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm font-semibold text-foreground">Peso corporal</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                        {chartData.length} registros · Tendencia:{' '}
                        <span className={diff < 0 ? 'text-green-600' : diff > 0 ? 'text-amber-600' : ''}>
                            {trend} ({diff > 0 ? '+' : ''}{diff.toFixed(1)} kg)
                        </span>
                    </p>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-accent/12 text-accent-foreground">
                    {diff < 0 ? <TrendingDown className="h-4 w-4" /> : <TrendingUp className="h-4 w-4" />}
                </span>
            </div>

            <div className="mt-4 h-56">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(20, 34, 26, 0.08)" />
                        <XAxis dataKey="date" tickLine={false} axisLine={false} fontSize={11} />
                        <YAxis tickLine={false} axisLine={false} fontSize={11} domain={['dataMin - 2', 'dataMax + 2']} />
                        <Tooltip contentStyle={tooltipStyles} />
                        <Legend wrapperStyle={{ fontSize: '12px' }} />
                        <Line
                            type="monotone"
                            dataKey="peso"
                            name="Peso (kg)"
                            stroke="#f97316"
                            strokeWidth={2.5}
                            dot={{ r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

function ExercisePanel({ exerciseName, exerciseNameEs, userId }: {
    exerciseName: string;
    exerciseNameEs: string;
    userId: string;
}) {
    const { getRecords } = useWeightStore();
    const records = getRecords(userId, exerciseName);

    const chartData = useMemo(() => {
        return [...records]
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((r) => ({
                date: r.date.slice(5),
                fullDate: r.date,
                max: getMaxWeight(r),
                avg: Math.round(getAvgWeight(r) * 10) / 10
            }));
    }, [records]);

    if (chartData.length === 0) return null;

    const lastMax = chartData[chartData.length - 1].max;
    const hasTrend = chartData.length >= 2;

    return (
        <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm font-semibold text-foreground">{exerciseNameEs}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                        {chartData.length} {chartData.length === 1 ? 'sesion' : 'sesiones'}
                        {hasTrend ? (
                            <span className={lastMax - chartData[0].max > 0 ? 'text-green-600' : lastMax - chartData[0].max < 0 ? 'text-amber-600' : ''}>
                                {' '}· Max: {lastMax - chartData[0].max > 0 ? '+' : ''}{lastMax - chartData[0].max} kg
                            </span>
                        ) : (
                            <span> · Max: {lastMax}kg</span>
                        )}
                    </p>
                </div>
                <div className="flex gap-1.5 shrink-0">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
                        Max {lastMax}kg
                    </span>
                </div>
            </div>

            <div className="mt-4 h-44">
                {chartData.length > 0 && (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(20, 34, 26, 0.08)" />
                            <XAxis dataKey="date" tickLine={false} axisLine={false} fontSize={10} />
                            <YAxis tickLine={false} axisLine={false} fontSize={10} domain={['dataMin - 5', 'dataMax + 5']} />
                            <Tooltip contentStyle={tooltipStyles} />
                            <Line
                                type="monotone"
                                dataKey="max"
                                name="Maximo (kg)"
                                stroke="#f97316"
                                strokeWidth={2}
                                dot={{ r: 3 }}
                                activeDot={{ r: 5 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="avg"
                                name="Promedio (kg)"
                                stroke="#00bcd4"
                                strokeWidth={1.5}
                                dot={{ r: 2 }}
                                strokeDasharray="6 3"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}

export default function ProgressionDashboard() {
    const { user, isAuthenticated } = useAuthStore();
    const [activeTab, setActiveTab] = useState<'peso' | 'ejercicios'>('peso');
    const [storeReady, setStoreReady] = useState(false);

    const weightHydrated = useWeightStore((s) => s._hydrated);
    const bodyWeightHydrated = useBodyWeightStore((s) => s._hydrated);
    const { getEntries } = useBodyWeightStore();
    const { records } = useWeightStore();

    useEffect(() => {
        const timer = setTimeout(() => setStoreReady(true), 250);
        return () => clearTimeout(timer);
    }, []);

    if (!isAuthenticated || !user) return null;

    const userId = user.username;

    const bodyWeightEntries = getEntries(userId);
    const exerciseNames = [...new Set(records
        .filter((r) => r.userId === userId)
        .map((r) => r.exerciseName))];

    const exercisesWithData = exercises.filter((e) => exerciseNames.includes(e.name));
    const hasExerciseData = exercisesWithData.length > 0;

    const loading = !storeReady || !weightHydrated || !bodyWeightHydrated;

    if (loading) {
        return (
            <div className="flex items-center justify-center py-24">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">Cargando datos de progreso...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-5">
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={() => setActiveTab('peso')}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                        activeTab === 'peso'
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border bg-background text-muted-foreground hover:text-foreground'
                    }`}
                >
                    Peso corporal
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab('ejercicios')}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                        activeTab === 'ejercicios'
                            ? 'bg-primary text-primary-foreground'
                            : 'border border-border bg-background text-muted-foreground hover:text-foreground'
                    }`}
                >
                    Cargas por ejercicio
                    {hasExerciseData && (
                        <span className="ml-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-white/20 px-1 text-[10px]">
                            {exercisesWithData.length}
                        </span>
                    )}
                </button>
            </div>

            {activeTab === 'peso' ? (
                bodyWeightEntries.length === 0 ? (
                    <div className="rounded-[2rem] border border-border/70 bg-card/80 p-12 text-center">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/12 text-accent-foreground">
                            <Scale className="h-8 w-8" />
                        </span>
                        <h2 className="mt-4 text-xl font-semibold text-foreground">Sin registros de peso</h2>
                        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                            El prompt diario te pide el peso una vez por dia. Tambien podes cargarlo manualmente desde la pagina de inicio cuando aparezca.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-5 lg:grid-cols-2">
                        <div className="lg:col-span-2">
                            <BodyWeightChart userId={userId} />
                        </div>
                        <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5">
                            <p className="text-sm font-semibold text-foreground">Ultimos registros</p>
                            <div className="mt-3 max-h-80 overflow-y-auto space-y-1.5">
                                {bodyWeightEntries.slice(0, 30).map((entry) => (
                                    <div key={entry.date} className="flex items-center justify-between rounded-lg bg-background/70 px-3 py-2 text-xs">
                                        <span className="font-medium text-foreground">{entry.weight} kg</span>
                                        <span className="text-muted-foreground">{entry.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            ) : (
                !hasExerciseData ? (
                    <div className="rounded-[2rem] border border-border/70 bg-card/80 p-12 text-center">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <BarChart3 className="h-8 w-8" />
                        </span>
                        <h2 className="mt-4 text-xl font-semibold text-foreground">Sin datos de ejercicios</h2>
                        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                            Registra pesos en los ejercicios de cada dia para ver la progresion aca.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {exercisesWithData.map((exercise) => (
                            <ExercisePanel
                                key={exercise.name}
                                exerciseName={exercise.name}
                                exerciseNameEs={exercise.nameEs}
                                userId={userId}
                            />
                        ))}
                    </div>
                )
            )}
        </div>
    );
}
