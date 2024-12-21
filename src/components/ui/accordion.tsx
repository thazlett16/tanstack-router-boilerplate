import { type ComponentProps } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/util/class-name';

const Accordion = AccordionPrimitive.Root;

interface AccordionItemProps
    extends ComponentProps<typeof AccordionPrimitive.Item> {}

const AccordionItem = ({ className, ...props }: AccordionItemProps) => (
    <AccordionPrimitive.Item
        className={cn('border-b', className)}
        {...props}
    />
);

interface AccordionTriggerProps
    extends ComponentProps<typeof AccordionPrimitive.Trigger> {}

const AccordionTrigger = ({
    className,
    children,
    ...props
}: AccordionTriggerProps) => (
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

interface AccordionContentProps
    extends ComponentProps<typeof AccordionPrimitive.Content> {}

const AccordionContent = ({
    className,
    children,
    ...props
}: AccordionContentProps) => (
    <AccordionPrimitive.Content
        className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
        {...props}
    >
        <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
