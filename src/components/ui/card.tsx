import { type ComponentProps } from 'react';
import { cn } from '@/util/class-name';

interface CardProps extends ComponentProps<'div'> {}

export const Card = ({ className, ...props }: CardProps) => (
    <div
        className={cn(
            'rounded-lg border bg-card text-card-foreground shadow-sm',
            className,
        )}
        {...props}
    />
);

interface CardHeaderProps extends ComponentProps<'div'> {}

export const CardHeader = ({ className, ...props }: CardHeaderProps) => (
    <div
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...props}
    />
);

interface CardTitleProps extends ComponentProps<'div'> {}

export const CardTitle = ({ className, ...props }: CardTitleProps) => (
    <div
        className={cn(
            'text-2xl font-semibold leading-none tracking-tight',
            className,
        )}
        {...props}
    />
);

interface CardDescriptionProps extends ComponentProps<'div'> {}

export const CardDescription = ({
    className,
    ...props
}: CardDescriptionProps) => (
    <div
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
);

interface CardContentProps extends ComponentProps<'div'> {}

export const CardContent = ({ className, ...props }: CardContentProps) => (
    <div
        className={cn('p-6 pt-0', className)}
        {...props}
    />
);

interface CardFooterProps extends ComponentProps<'div'> {}

export const CardFooter = ({ className, ...props }: CardFooterProps) => (
    <div
        className={cn('flex items-center p-6 pt-0', className)}
        {...props}
    />
);
