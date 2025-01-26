import { type ComponentPropsWithRef } from 'react';

import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@/util/class-name';

export const ContextMenu = ContextMenuPrimitive.Root;

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

export const ContextMenuGroup = ContextMenuPrimitive.Group;

export const ContextMenuPortal = ContextMenuPrimitive.Portal;

export const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = ({
    className,
    inset,
    children,
    ...props
}: ComponentPropsWithRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}) => (
    <ContextMenuPrimitive.SubTrigger
        className={cn(
            'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
            inset && 'pl-8',
            className,
        )}
        {...props}
    >
        {children}
        <ChevronRight className="ml-auto h-4 w-4" />
    </ContextMenuPrimitive.SubTrigger>
);

const ContextMenuSubContent = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof ContextMenuPrimitive.SubContent>) => (
    <ContextMenuPrimitive.SubContent
        className={cn(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
        )}
        {...props}
    />
);

const ContextMenuContent = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof ContextMenuPrimitive.Content>) => (
    <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
            className={cn(
                'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                className,
            )}
            {...props}
        />
    </ContextMenuPrimitive.Portal>
);

const ContextMenuItem = ({
    className,
    inset,
    ...props
}: ComponentPropsWithRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
}) => (
    <ContextMenuPrimitive.Item
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            inset && 'pl-8',
            className,
        )}
        {...props}
    />
);

const ContextMenuCheckboxItem = ({
    className,
    children,
    checked,
    ...props
}: ComponentPropsWithRef<typeof ContextMenuPrimitive.CheckboxItem>) => (
    <ContextMenuPrimitive.CheckboxItem
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            className,
        )}
        checked={checked}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <ContextMenuPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitive.CheckboxItem>
);

const ContextMenuRadioItem = ({
    className,
    children,
    ...props
}: ComponentPropsWithRef<typeof ContextMenuPrimitive.RadioItem>) => (
    <ContextMenuPrimitive.RadioItem
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            className,
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <ContextMenuPrimitive.ItemIndicator>
                <Circle className="h-2 w-2 fill-current" />
            </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitive.RadioItem>
);

const ContextMenuLabel = ({
    className,
    inset,
    ...props
}: ComponentPropsWithRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
}) => (
    <ContextMenuPrimitive.Label
        className={cn(
            'px-2 py-1.5 text-sm font-semibold text-foreground',
            inset && 'pl-8',
            className,
        )}
        {...props}
    />
);

const ContextMenuSeparator = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof ContextMenuPrimitive.Separator>) => (
    <ContextMenuPrimitive.Separator
        className={cn('-mx-1 my-1 h-px bg-border', className)}
        {...props}
    />
);

const ContextMenuShortcut = ({
    className,
    ...props
}: ComponentPropsWithRef<'span'>) => {
    return (
        <span
            className={cn(
                'ml-auto text-xs tracking-widest text-muted-foreground',
                className,
            )}
            {...props}
        />
    );
};
