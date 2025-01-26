import { type ComponentPropsWithRef } from 'react';

import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/util/class-name';

export const Drawer = ({
    shouldScaleBackground = true,
    ...props
}: ComponentPropsWithRef<typeof DrawerPrimitive.Root>) => (
    <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        {...props}
    />
);

export const DrawerTrigger = DrawerPrimitive.Trigger;

export const DrawerPortal = DrawerPrimitive.Portal;

export const DrawerClose = DrawerPrimitive.Close;

export const DrawerOverlay = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof DrawerPrimitive.Overlay>) => (
    <DrawerPrimitive.Overlay
        className={cn('fixed inset-0 z-50 bg-black/80', className)}
        {...props}
    />
);

export const DrawerContent = ({
    className,
    children,
    ...props
}: ComponentPropsWithRef<typeof DrawerPrimitive.Content>) => (
    <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
            className={cn(
                'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
                className,
            )}
            {...props}
        >
            <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
            {children}
        </DrawerPrimitive.Content>
    </DrawerPortal>
);

export const DrawerHeader = ({
    className,
    ...props
}: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
        {...props}
    />
);

export const DrawerFooter = ({
    className,
    ...props
}: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn('mt-auto flex flex-col gap-2 p-4', className)}
        {...props}
    />
);

export const DrawerTitle = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof DrawerPrimitive.Title>) => (
    <DrawerPrimitive.Title
        className={cn(
            'text-lg font-semibold leading-none tracking-tight',
            className,
        )}
        {...props}
    />
);

export const DrawerDescription = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof DrawerPrimitive.Description>) => (
    <DrawerPrimitive.Description
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
);
