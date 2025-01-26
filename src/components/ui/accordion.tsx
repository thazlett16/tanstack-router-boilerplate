import { type ComponentPropsWithRef } from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/util/class-name';

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = ({ className, ...props }: ComponentPropsWithRef<typeof AccordionPrimitive.Item>) => (
    <AccordionPrimitive.Item
        className={cn('border-b', className)}
        {...props}
    />
);

export const AccordionTrigger = ({
    className,
    children,
    ...props
}: ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            className={cn(
                'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
                className,
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
);

export const AccordionContent = ({
    className,
    children,
    ...props
}: ComponentPropsWithRef<typeof AccordionPrimitive.Content>) => (
    <AccordionPrimitive.Content
        className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
        {...props}
    >
        <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
);
