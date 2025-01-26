import { type ComponentPropsWithRef } from 'react';

import { cn } from '@/util/class-name';

export const Skeleton = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
    return (
        <div
            className={cn('animate-pulse rounded-md bg-muted', className)}
            {...props}
        />
    );
};
