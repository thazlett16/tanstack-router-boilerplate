import { type ComponentPropsWithRef } from 'react';

import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/util/class-name';

export const Separator = ({
    className,
    orientation = 'horizontal',
    decorative = true,
    ...props
}: ComponentPropsWithRef<typeof SeparatorPrimitive.Root>) => (
    <SeparatorPrimitive.Root
        decorative={decorative}
        orientation={orientation}
        className={cn(
            'shrink-0 bg-border',
            orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
            className,
        )}
        {...props}
    />
);
