'use client';

import {
	Bar,
	BarChart,
	CartesianGrid,
	Line,
	LineChart,
	PolarAngleAxis,
	PolarGrid,
	Radar,
	RadarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts';

import {
	adaptationTrendChart,
	learningRadarChart,
	sessionDistributionChart
} from '../../data/training-plan';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const tooltipStyles = {
	border: '1px solid rgba(20, 34, 26, 0.12)',
	borderRadius: '18px',
	backgroundColor: 'rgba(255, 250, 244, 0.95)',
	boxShadow: '0 18px 50px rgba(18, 38, 31, 0.08)'
};

export default function SessionCharts() {
	return (
		<div className="grid gap-4 xl:grid-cols-3">
			<Card className="border-border/70 bg-card/85">
				<CardHeader>
					<CardTitle>Distribucion de la sesion</CardTitle>
					<CardDescription>Cada bloque tiene tiempo asignado para reducir fatiga decisional dentro del gimnasio.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="h-72">
						<ResponsiveContainer width="100%" height="100%">
							<BarChart data={sessionDistributionChart} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
								<CartesianGrid vertical={false} stroke="rgba(20, 34, 26, 0.08)" />
								<XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
								<YAxis tickLine={false} axisLine={false} fontSize={12} />
								<Tooltip cursor={{ fill: 'rgba(22, 93, 72, 0.06)' }} contentStyle={tooltipStyles} />
								<Bar dataKey="minutes" radius={[12, 12, 0, 0]} fill="#165d48" />
							</BarChart>
						</ResponsiveContainer>
					</div>
				</CardContent>
			</Card>

			<Card className="border-border/70 bg-card/85">
				<CardHeader>
					<CardTitle>Tendencia de adaptacion</CardTitle>
					<CardDescription>La tecnica baja muy poco y la tolerancia sube gradualmente; la carga recien acompana despues.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="h-72">
						<ResponsiveContainer width="100%" height="100%">
							<LineChart data={adaptationTrendChart} margin={{ top: 8, right: 12, left: -20, bottom: 0 }}>
								<CartesianGrid strokeDasharray="4 4" vertical={false} stroke="rgba(20, 34, 26, 0.08)" />
								<XAxis dataKey="week" tickLine={false} axisLine={false} fontSize={12} />
								<YAxis tickLine={false} axisLine={false} fontSize={12} />
								<Tooltip contentStyle={tooltipStyles} />
								<Line type="monotone" dataKey="tecnica" stroke="#165d48" strokeWidth={3} dot={{ r: 4 }} />
								<Line type="monotone" dataKey="carga" stroke="#f08b4b" strokeWidth={3} dot={{ r: 4 }} />
								<Line type="monotone" dataKey="tolerancia" stroke="#4f8f7a" strokeWidth={3} dot={{ r: 4 }} />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</CardContent>
			</Card>

			<Card className="border-border/70 bg-card/85">
				<CardHeader>
					<CardTitle>Pilares de aprendizaje</CardTitle>
					<CardDescription>El plan no solo mide esfuerzo. Tambien mide adherencia, tecnica y recuperacion util.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="h-72">
						<ResponsiveContainer width="100%" height="100%">
							<RadarChart data={learningRadarChart} outerRadius="70%">
								<PolarGrid stroke="rgba(20, 34, 26, 0.12)" />
								<PolarAngleAxis dataKey="metric" tick={{ fontSize: 12, fill: '#5d625d' }} />
								<Radar dataKey="value" stroke="#f08b4b" fill="#f08b4b" fillOpacity={0.35} strokeWidth={2.5} />
								<Tooltip contentStyle={tooltipStyles} />
							</RadarChart>
						</ResponsiveContainer>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}