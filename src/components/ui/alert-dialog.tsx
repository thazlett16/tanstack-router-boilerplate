import { type ComponentProps } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '@/util/class-name';
import { buttonVariants } from '@/components/ui/button';

export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogPortal = AlertDialogPrimitive.Portal;

interface AlertDialogOverlayProps
    extends ComponentProps<typeof AlertDialogPrimitive.Overlay> {}

export const AlertDialogOverlay = ({
    className,
    ...props
}: AlertDialogOverlayProps) => (
    <AlertDialogPrimitive.Overlay
        className={cn(
            'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            className,
        )}
        {...props}
    />
);

interface AlertDialogContentProps
    extends ComponentProps<typeof AlertDialogPrimitive.Content> {}

export const AlertDialogContent = ({
    className,
    ...props
}: AlertDialogContentProps) => (
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

interface AlertDialogHeaderProps extends ComponentProps<'div'> {}

export const AlertDialogHeader = ({
    className,
    ...props
}: AlertDialogHeaderProps) => (
    <div
        className={cn(
            'flex flex-col space-y-2 text-center sm:text-left',
            className,
        )}
        {...props}
    />
);

interface AlertDialogFooterProps extends ComponentProps<'div'> {}

export const AlertDialogFooter = ({
    className,
    ...props
}: AlertDialogFooterProps) => (
    <div
        className={cn(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            className,
        )}
        {...props}
    />
);

interface AlertDialogTitleProps
    extends ComponentProps<typeof AlertDialogPrimitive.Title> {}

export const AlertDialogTitle = ({
    className,
    ...props
}: AlertDialogTitleProps) => (
    <AlertDialogPrimitive.Title
        className={cn('text-lg font-semibold', className)}
        {...props}
    />
);

interface AlertDialogDescriptionProps
    extends ComponentProps<typeof AlertDialogPrimitive.Description> {}

export const AlertDialogDescription = ({
    className,
    ...props
}: AlertDialogDescriptionProps) => (
    <AlertDialogPrimitive.Description
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
);

interface AlertDialogActionProps
    extends ComponentProps<typeof AlertDialogPrimitive.Action> {}

export const AlertDialogAction = ({
    className,
    ...props
}: AlertDialogActionProps) => (
    <AlertDialogPrimitive.Action
        className={cn(buttonVariants(), className)}
        {...props}
    />
);

interface AlertDialogCancelProps
    extends ComponentProps<typeof AlertDialogPrimitive.Cancel> {}

export const AlertDialogCancel = ({
    className,
    ...props
}: AlertDialogCancelProps) => (
    <AlertDialogPrimitive.Cancel
        className={cn(
            buttonVariants({ variant: 'outline' }),
            'mt-2 sm:mt-0',
            className,
        )}
        {...props}
    />
);
