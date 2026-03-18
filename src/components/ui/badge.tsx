import type { HTMLAttributes } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors',
	{
		variants: {
			variant: {
				default: 'border-primary/20 bg-primary/10 text-primary',
				secondary: 'border-border bg-secondary text-secondary-foreground',
				outline: 'border-border bg-background text-muted-foreground',
				caution: 'border-accent/20 bg-accent/10 text-accent-foreground'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
);

type BadgeProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}