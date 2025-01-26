import { type ComponentPropsWithRef } from 'react';

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

import { cn } from '@/util/class-name';

export const HoverCard = HoverCardPrimitive.Root;

export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export const HoverCardContent = ({
    className,
    align = 'center',
    sideOffset = 4,
    ...props
}: ComponentPropsWithRef<typeof HoverCardPrimitive.Content>) => (
    <HoverCardPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
            'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
        )}
        {...props}
    />
);
