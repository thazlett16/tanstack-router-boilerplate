import { type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/util/class-name';

const alertVariants = cva(
    'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
    {
        variants: {
            variant: {
                default: 'bg-background text-foreground',
                destructive:
                    'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
);

interface AlertProps
    extends ComponentProps<'div'>,
        VariantProps<typeof alertVariants> {}

export const Alert = ({ className, variant, ...props }: AlertProps) => (
    <div
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
    />
);

interface AlertTitleProps extends ComponentProps<'h5'> {}

export const AlertTitle = ({ className, ...props }: AlertTitleProps) => (
    <h5
        className={cn(
            'mb-1 font-medium leading-none tracking-tight',
            className,
        )}
        {...props}
    />
);

interface AlertDescriptionProps extends ComponentProps<'p'> {}

export const AlertDescription = ({
    className,
    ...props
}: AlertDescriptionProps) => (
    <div
        className={cn('text-sm [&_p]:leading-relaxed', className)}
        {...props}
    />
);
