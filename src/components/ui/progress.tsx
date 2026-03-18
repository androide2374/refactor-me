import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '../../lib/utils';

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
	value: number;
};

export function Progress({ className, value, ...props }: ProgressProps) {
	return (
		<ProgressPrimitive.Root
			className={cn('relative h-2.5 w-full overflow-hidden rounded-full bg-secondary', className)}
			value={value}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className="h-full rounded-full bg-primary transition-transform"
				style={{ transform: `translateX(-${100 - value}%)` }}
			/>
		</ProgressPrimitive.Root>
	);
}