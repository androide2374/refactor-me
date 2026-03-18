import type { HTMLAttributes } from 'react';

import { cn } from '../../lib/utils';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			data-slot="card"
			className={cn('rounded-[1.5rem] border border-border/70 bg-card text-card-foreground shadow-[0_18px_50px_rgba(18,38,31,0.08)]', className)}
			{...props}
		/>
	);
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return <div data-slot="card-header" className={cn('flex flex-col gap-2 p-6', className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
	return <h3 data-slot="card-title" className={cn('text-xl font-semibold tracking-[-0.03em] text-foreground', className)} {...props} />;
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
	return <p data-slot="card-description" className={cn('text-sm leading-6 text-muted-foreground', className)} {...props} />;
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return <div data-slot="card-content" className={cn('px-6 pb-6', className)} {...props} />;
}