import { type ComponentProps } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/util/class-name';

interface AvatarProps extends ComponentProps<typeof AvatarPrimitive.Root> {}

export const Avatar = ({ className, ...props }: AvatarProps) => (
    <AvatarPrimitive.Root
        className={cn(
            'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
            className,
        )}
        {...props}
    />
);

interface AvatarImageProps
    extends ComponentProps<typeof AvatarPrimitive.Image> {}

export const AvatarImage = ({ className, ...props }: AvatarImageProps) => (
    <AvatarPrimitive.Image
        className={cn('aspect-square h-full w-full', className)}
        {...props}
    />
);

interface AvatarFallbackProps
    extends ComponentProps<typeof AvatarPrimitive.Fallback> {}

export const AvatarFallback = ({
    className,
    ...props
}: AvatarFallbackProps) => (
    <AvatarPrimitive.Fallback
        className={cn(
            'flex h-full w-full items-center justify-center rounded-full bg-muted',
            className,
        )}
        {...props}
    />
);
