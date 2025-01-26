import { type ComponentPropsWithRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/util/class-name';

export const alertVariants = cva(
    'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
    {
        variants: {
            variant: {
                default: 'bg-background text-foreground',
                destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

export type TAlertVariants = VariantProps<typeof alertVariants>;

export const Alert = ({ className, variant, ...props }: ComponentPropsWithRef<'div'> & TAlertVariants) => (
    <div
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
    />
);

export const AlertTitle = ({ className, ...props }: ComponentPropsWithRef<'h5'>) => (
    <h5
        className={cn('mb-1 font-medium leading-none tracking-tight', className)}
        {...props}
    />
);

export const AlertDescription = ({ className, ...props }: ComponentPropsWithRef<'p'>) => (
    <div
        className={cn('text-sm [&_p]:leading-relaxed', className)}
        {...props}
    />
);
