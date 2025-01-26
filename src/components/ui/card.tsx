import { type ComponentPropsWithRef } from 'react';

import { cn } from '@/util/class-name';

export const Card = ({ className, ...props }: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn(
            'rounded-lg border bg-card text-card-foreground shadow-sm',
            className,
        )}
        {...props}
    />
);

export const CardHeader = ({
    className,
    ...props
}: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
    />
);

export const CardTitle = ({
    className,
    ...props
}: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn(
            'text-2xl font-semibold leading-none tracking-tight',
            className,
        )}
        {...props}
    />
);

export const CardDescription = ({
    className,
    ...props
}: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
);

export const CardContent = ({
    className,
    ...props
}: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn('p-6 pt-0', className)}
        {...props}
    />
);

export const CardFooter = ({
    className,
    ...props
}: ComponentPropsWithRef<'div'>) => (
    <div
        className={cn('flex items-center p-6 pt-0', className)}
        {...props}
    />
);
