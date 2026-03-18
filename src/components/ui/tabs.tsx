import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../lib/utils';

export function Tabs(props: React.ComponentProps<typeof TabsPrimitive.Root>) {
	return <TabsPrimitive.Root data-slot="tabs" {...props} />;
}

export function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn('inline-flex h-auto w-full flex-wrap gap-2 rounded-[1.5rem] border border-border/70 bg-background/70 p-2', className)}
			{...props}
		/>
	);
}

export function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(
				'inline-flex min-h-11 flex-1 items-center justify-center rounded-[1.1rem] px-3 py-2 text-sm font-semibold text-muted-foreground transition data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
				className
			)}
			{...props}
		/>
	);
}

export function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
	return <TabsPrimitive.Content data-slot="tabs-content" className={cn('mt-4 outline-none', className)} {...props} />;
}