import { type ComponentPropsWithRef } from 'react';

import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/util/class-name';

export const Command = ({ className, ...props }: ComponentPropsWithRef<typeof CommandPrimitive>) => (
    <CommandPrimitive
        className={cn(
            'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
            className,
        )}
        {...props}
    />
);

export const CommandDialog = ({ children, ...props }: DialogProps) => {
    return (
        <Dialog {...props}>
            <DialogContent className="overflow-hidden p-0 shadow-lg">
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    );
};

export const CommandInput = ({ className, ...props }: ComponentPropsWithRef<typeof CommandPrimitive.Input>) => (
    <div
        className="flex items-center border-b px-3"
        cmdk-input-wrapper=""
    >
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <CommandPrimitive.Input
            className={cn(
                'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    </div>
);

export const CommandList = ({ className, ...props }: ComponentPropsWithRef<typeof CommandPrimitive.List>) => (
    <CommandPrimitive.List
        className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
        {...props}
    />
);

export const CommandEmpty = ({ ...props }: ComponentPropsWithRef<typeof CommandPrimitive.Empty>) => (
    <CommandPrimitive.Empty
        className="py-6 text-center text-sm"
        {...props}
    />
);

export const CommandGroup = ({ className, ...props }: ComponentPropsWithRef<typeof CommandPrimitive.Group>) => (
    <CommandPrimitive.Group
        className={cn(
            'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
            className,
        )}
        {...props}
    />
);

export const CommandSeparator = ({ className, ...props }: ComponentPropsWithRef<typeof CommandPrimitive.Separator>) => (
    <CommandPrimitive.Separator
        className={cn('-mx-1 h-px bg-border', className)}
        {...props}
    />
);

export const CommandItem = ({ className, ...props }: ComponentPropsWithRef<typeof CommandPrimitive.Item>) => (
    <CommandPrimitive.Item
        className={cn(
            "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            className,
        )}
        {...props}
    />
);

export const CommandShortcut = ({ className, ...props }: ComponentPropsWithRef<'span'>) => {
    return (
        <span
            className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
            {...props}
        />
    );
};
