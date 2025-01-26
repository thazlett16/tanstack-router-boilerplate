import { type ComponentPropsWithRef } from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/util/class-name';

const Progress = ({
    className,
    value,
    ...props
}: ComponentPropsWithRef<typeof ProgressPrimitive.Root>) => (
    <ProgressPrimitive.Root
        className={cn(
            'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
            className,
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className="h-full w-full flex-1 bg-primary transition-all"
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </ProgressPrimitive.Root>
);
