'use client';

import { useState } from 'react';
import { BarChart3, ChevronDown, ChevronUp, Plus, Trash2, Weight } from 'lucide-react';

import { useAuthStore } from '../stores/authStore';
import { getMaxWeight, useWeightStore } from '../stores/weightStore';
import WeightChart from './WeightChart';

interface Props {
    exerciseName: string;
    exerciseNameEs: string;
    prescribedSets: number;
    prescribedReps: number;
}

export default function WeightLogger({ exerciseName, exerciseNameEs, prescribedSets, prescribedReps }: Props) {
    const [open, setOpen] = useState(false);
    const [notes, setNotes] = useState('');
    const [showHistory, setShowHistory] = useState(false);
    const [showChart, setShowChart] = useState(false);

    const { user } = useAuthStore();
    const { addRecord, getRecords, getLastRecord, deleteRecord } = useWeightStore();

    const userId = user?.username ?? '';
    const records = getRecords(userId, exerciseName);
    const lastRecord = getLastRecord(userId, exerciseName);

    const [setWeights, setSetWeights] = useState<string[]>(
        Array.from({ length: prescribedSets }, () =>
            lastRecord?.sets.find((s) => s.setNumber === 1)?.weight.toString() ?? ''
        )
    );

    const today = new Date().toISOString().slice(0, 10);

    const handleSave = () => {
        const sets = setWeights.map((w, i) => ({
            setNumber: i + 1,
            weight: Number.parseFloat(w) || 0,
            reps: prescribedReps
        }));

        if (sets.every((s) => s.weight === 0)) return;

        addRecord({
            userId,
            date: today,
            exerciseName,
            sets,
            notes
        });

        setSetWeights(Array.from({ length: prescribedSets }, () => ''));
        setNotes('');
        setOpen(false);
    };

    const handleDelete = (id: string) => {
        deleteRecord(id);
    };

    const openForm = () => {
        if (lastRecord) {
            setSetWeights(
                Array.from({ length: prescribedSets }, (_, i) => {
                    const set = lastRecord.sets.find((s) => s.setNumber === i + 1);
                    return set?.weight.toString() ?? '';
                })
            );
            setNotes('');
        }
        setOpen(true);
    };

    if (!userId) return null;

    return (
        <div className="mt-3 border-t border-border/60 pt-3">
            {!open ? (
                <div className="flex items-center justify-between gap-2">
                    <button
                        type="button"
                        onClick={openForm}
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition hover:bg-primary/20"
                    >
                        <Plus className="h-3.5 w-3.5" />
                        Registrar peso
                    </button>
                    <div className="flex items-center gap-3">
                        {lastRecord && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Weight className="h-3 w-3" />
                                <span>Max: {getMaxWeight(lastRecord)}kg</span>
                                <span className="text-border">·</span>
                                <span>{lastRecord.date.slice(5)}</span>
                            </div>
                        )}
                        {records.length > 0 && (
                            <button
                                type="button"
                                onClick={() => setShowChart(true)}
                                className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition hover:text-foreground"
                            >
                                <BarChart3 className="h-3 w-3" />
                                Progresion
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Registrar pesos por serie</span>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition hover:text-foreground"
                        >
                            <ChevronUp className="h-3.5 w-3.5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                        {Array.from({ length: prescribedSets }, (_, i) => (
                            <div key={`set-${i + 1}`}>
                                <label className="mb-1 block text-[11px] font-medium text-muted-foreground">
                                    Serie {i + 1} (kg)
                                </label>
                                <input
                                    type="number"
                                    value={setWeights[i] ?? ''}
                                    onChange={(e) => {
                                        const next = [...setWeights];
                                        next[i] = e.target.value;
                                        setSetWeights(next);
                                    }}
                                    placeholder={lastRecord?.sets.find((s) => s.setNumber === i + 1)?.weight.toString() ?? '0'}
                                    step="0.5"
                                    min="0"
                                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none"
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className="mb-1 block text-[11px] font-medium text-muted-foreground">Notas (opcional)</label>
                        <input
                            type="text"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Ej: senti pesado, mejore tecnica…"
                            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/40 focus:outline-none"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleSave}
                        disabled={setWeights.every((w) => !w || Number.parseFloat(w) <= 0)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-40"
                    >
                        <Plus className="h-4 w-4" />
                        Guardar {exerciseNameEs}
                    </button>

                    {records.length > 0 && (
                        <div>
                            <button
                                type="button"
                                onClick={() => setShowHistory(!showHistory)}
                                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground"
                            >
                                <Weight className="h-3.5 w-3.5" />
                                Historial ({records.length})
                                {showHistory ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                            </button>

                            {showHistory && (
                                <div className="mt-2 max-h-48 space-y-1.5 overflow-y-auto">
                                    {records.slice(0, 8).map((record) => (
                                        <div
                                            key={record.id}
                                            className="flex items-center justify-between gap-2 rounded-lg bg-background/70 px-3 py-2 text-xs"
                                        >
                                            <div className="flex items-center gap-2 min-w-0">
                                                <Weight className="h-3 w-3 shrink-0 text-primary" />
                                                <span className="font-medium text-foreground">
                                                    {getMaxWeight(record)}kg
                                                </span>
                                                <span className="text-muted-foreground/60 truncate">
                                                    {record.sets.map((s) => s.weight).join(' / ')}kg
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <span className="text-muted-foreground">{record.date.slice(5)}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(record.id)}
                                                    className="inline-flex h-5 w-5 items-center justify-center rounded-md text-muted-foreground/60 transition hover:text-destructive"
                                                    aria-label="Eliminar registro"
                                                >
                                                    <Trash2 className="h-3 w-3" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {showChart && (
                <WeightChart
                    exerciseName={exerciseName}
                    exerciseNameEs={exerciseNameEs}
                    userId={userId}
                    onClose={() => setShowChart(false)}
                />
            )}
        </div>
    );
}
