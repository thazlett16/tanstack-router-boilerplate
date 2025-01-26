import { type ComponentPropsWithRef } from 'react';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { buttonVariants } from '@/components/base/button';
import { cn } from '@/util/class-name';

export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogPortal = AlertDialogPrimitive.Portal;

export const AlertDialogOverlay = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof AlertDialogPrimitive.Overlay>) => (
    <AlertDialogPrimitive.Overlay
        className={cn(
            'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            className,
        )}
        {...props}
    />
);

export const AlertDialogContent = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof AlertDialogPrimitive.Content>) => (
    <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
            className={cn(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                className,
            )}
            {...props}
        />
    </AlertDialogPortal>
);

export const AlertDialogHeader = ({ className, ...props }: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn('flex flex-col space-y-2 text-center sm:text-left', className)}
        {...props}
    />
);

export const AlertDialogFooter = ({ className, ...props }: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
        {...props}
    />
);

export const AlertDialogTitle = ({ className, ...props }: ComponentPropsWithRef<typeof AlertDialogPrimitive.Title>) => (
    <AlertDialogPrimitive.Title
        className={cn('text-lg font-semibold', className)}
        {...props}
    />
);

export const AlertDialogDescription = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof AlertDialogPrimitive.Description>) => (
    <AlertDialogPrimitive.Description
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
);

export const AlertDialogAction = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof AlertDialogPrimitive.Action>) => (
    <AlertDialogPrimitive.Action
        className={cn(buttonVariants(), className)}
        {...props}
    />
);

export const AlertDialogCancel = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof AlertDialogPrimitive.Cancel>) => (
    <AlertDialogPrimitive.Cancel
        className={cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
        {...props}
    />
);
