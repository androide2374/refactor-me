'use client';

import { useMemo } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { X } from 'lucide-react';

import { getAvgWeight, getMaxWeight, useWeightStore } from '../stores/weightStore';

interface Props {
    exerciseName: string;
    exerciseNameEs: string;
    userId: string;
    onClose: () => void;
}

const tooltipStyles = {
    border: '1px solid rgba(20, 34, 26, 0.12)',
    borderRadius: '14px',
    backgroundColor: 'rgba(255, 250, 244, 0.95)',
    boxShadow: '0 14px 40px rgba(18, 38, 31, 0.08)',
    fontSize: '12px',
    padding: '8px 10px'
};

export default function WeightChart({ exerciseName, exerciseNameEs, userId, onClose }: Props) {
    const { getRecords } = useWeightStore();
    const records = getRecords(userId, exerciseName);

    const chartData = useMemo(() => {
        return [...records]
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((record) => ({
                date: record.date.slice(5),
                fullDate: record.date,
                max: getMaxWeight(record),
                avg: Math.round(getAvgWeight(record) * 10) / 10,
                sets: record.sets.map((s) => `${s.weight}kg`).join(' · ')
            }));
    }, [records]);

    const hasData = chartData.length > 0;

    return (
        <dialog open className="app-modal fixed inset-0 z-50 items-center justify-center p-3" aria-label={`Progresion ${exerciseNameEs}`}>
            <div className="w-full max-w-2xl rounded-[1.75rem] border border-border/80 bg-card p-5 shadow-[0_24px_80px_rgba(18,38,31,0.32)] sm:p-6">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Progresion</p>
                        <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-foreground">{exerciseNameEs}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {records.length} registros · Maximo y promedio por sesion
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-foreground"
                        aria-label="Cerrar"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {hasData ? (
                    <div className="mt-4">
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(20, 34, 26, 0.08)" />
                                    <XAxis dataKey="date" tickLine={false} axisLine={false} fontSize={11} />
                                    <YAxis tickLine={false} axisLine={false} fontSize={11} domain={['dataMin - 5', 'dataMax + 5']} />
                                    <Tooltip contentStyle={tooltipStyles} />
                                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                                    <Line
                                        type="monotone"
                                        dataKey="max"
                                        name="Maximo (kg)"
                                        stroke="#f97316"
                                        strokeWidth={2.5}
                                        dot={{ r: 4 }}
                                        activeDot={{ r: 6 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="avg"
                                        name="Promedio (kg)"
                                        stroke="#00bcd4"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        strokeDasharray="6 3"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="mt-4 max-h-40 overflow-y-auto rounded-[1.2rem] border border-border/70 bg-background/60">
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="border-b border-border/60 text-left text-muted-foreground">
                                        <th className="px-4 py-2.5 font-medium">Fecha</th>
                                        <th className="px-4 py-2.5 font-medium">Max</th>
                                        <th className="px-4 py-2.5 font-medium">Prom</th>
                                        <th className="px-4 py-2.5 font-medium hidden sm:table-cell">Por serie</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chartData.reverse().map((entry) => (
                                        <tr key={entry.fullDate} className="border-b border-border/30 text-foreground/86">
                                            <td className="px-4 py-2.5 font-medium">{entry.fullDate}</td>
                                            <td className="px-4 py-2.5">{entry.max} kg</td>
                                            <td className="px-4 py-2.5">{entry.avg} kg</td>
                                            <td className="px-4 py-2.5 text-muted-foreground hidden sm:table-cell">{entry.sets}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="mt-4 rounded-[1.2rem] border border-border/70 bg-background/50 p-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            Aun no hay registros de peso para este ejercicio. Empeza a cargar pesos.
                        </p>
                    </div>
                )}

                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40"
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </dialog>
    );
}
