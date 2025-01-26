import { type ComponentPropsWithRef } from 'react';

import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@/util/class-name';

export const MenubarMenu = MenubarPrimitive.Menu;

export const MenubarGroup = MenubarPrimitive.Group;

export const MenubarPortal = MenubarPrimitive.Portal;

export const MenubarSub = MenubarPrimitive.Sub;

export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

export const Menubar = ({ className, ...props }: ComponentPropsWithRef<typeof MenubarPrimitive.Root>) => (
    <MenubarPrimitive.Root
        className={cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', className)}
        {...props}
    />
);

export const MenubarTrigger = ({ className, ...props }: ComponentPropsWithRef<typeof MenubarPrimitive.Trigger>) => (
    <MenubarPrimitive.Trigger
        className={cn(
            'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
            className,
        )}
        {...props}
    />
);

export const MenubarSubTrigger = ({
    className,
    inset,
    children,
    ...props
}: ComponentPropsWithRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
}) => (
    <MenubarPrimitive.SubTrigger
        className={cn(
            'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
            inset && 'pl-8',
            className,
        )}
        {...props}
    >
        {children}
        <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
);

export const MenubarSubContent = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof MenubarPrimitive.SubContent>) => (
    <MenubarPrimitive.SubContent
        className={cn(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
        )}
        {...props}
    />
);

export const MenubarContent = ({
    className,
    align = 'start',
    alignOffset = -4,
    sideOffset = 8,
    ...props
}: ComponentPropsWithRef<typeof MenubarPrimitive.Content>) => (
    <MenubarPrimitive.Portal>
        <MenubarPrimitive.Content
            align={align}
            alignOffset={alignOffset}
            sideOffset={sideOffset}
            className={cn(
                'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                className,
            )}
            {...props}
        />
    </MenubarPrimitive.Portal>
);

export const MenubarItem = ({
    className,
    inset,
    ...props
}: ComponentPropsWithRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
}) => (
    <MenubarPrimitive.Item
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            inset && 'pl-8',
            className,
        )}
        {...props}
    />
);

export const MenubarCheckboxItem = ({
    className,
    children,
    checked,
    ...props
}: ComponentPropsWithRef<typeof MenubarPrimitive.CheckboxItem>) => (
    <MenubarPrimitive.CheckboxItem
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            className,
        )}
        checked={checked}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <MenubarPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.CheckboxItem>
);

export const MenubarRadioItem = ({
    className,
    children,
    ...props
}: ComponentPropsWithRef<typeof MenubarPrimitive.RadioItem>) => (
    <MenubarPrimitive.RadioItem
        className={cn(
            'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            className,
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <MenubarPrimitive.ItemIndicator>
                <Circle className="h-2 w-2 fill-current" />
            </MenubarPrimitive.ItemIndicator>
        </span>
        {children}
    </MenubarPrimitive.RadioItem>
);

export const MenubarLabel = ({
    className,
    inset,
    ...props
}: ComponentPropsWithRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
}) => (
    <MenubarPrimitive.Label
        className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
        {...props}
    />
);

export const MenubarSeparator = ({ className, ...props }: ComponentPropsWithRef<typeof MenubarPrimitive.Separator>) => (
    <MenubarPrimitive.Separator
        className={cn('-mx-1 my-1 h-px bg-muted', className)}
        {...props}
    />
);

export const MenubarShortcut = ({ className, ...props }: ComponentPropsWithRef<'span'>) => {
    return (
        <span
            className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
            {...props}
        />
    );
};
