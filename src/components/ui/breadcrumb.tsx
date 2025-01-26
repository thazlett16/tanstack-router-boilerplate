import { type ComponentPropsWithRef } from 'react';

import { ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/util/class-name';

export const Breadcrumb = ({ ...props }: ComponentPropsWithRef<'nav'>) => (
    <nav
        aria-label="breadcrumb"
        {...props}
    />
);

export const BreadcrumbList = ({ className, ...props }: ComponentPropsWithRef<'ol'>) => (
    <ol
        className={cn(
            'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
            className,
        )}
        {...props}
    />
);

export const BreadcrumbItem = ({ className, ...props }: ComponentPropsWithRef<'li'>) => (
    <li
        className={cn('inline-flex items-center gap-1.5', className)}
        {...props}
    />
);

export const BreadcrumbLink = ({ className, ...props }: ComponentPropsWithRef<'a'>) => {
    return (
        <a
            className={cn('transition-colors hover:text-foreground', className)}
            {...props}
        />
    );
};

export const BreadcrumbPage = ({ className, ...props }: ComponentPropsWithRef<'span'>) => (
    <span
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn('font-normal text-foreground', className)}
        {...props}
    />
);

export const BreadcrumbSeparator = ({ children, className, ...props }: ComponentPropsWithRef<'li'>) => (
    <li
        role="presentation"
        aria-hidden="true"
        className={cn('[&>svg]:h-3.5 [&>svg]:w-3.5', className)}
        {...props}
    >
        {children ?? <ChevronRight />}
    </li>
);

export const BreadcrumbEllipsis = ({ className, ...props }: ComponentPropsWithRef<'span'>) => (
    <span
        role="presentation"
        aria-hidden="true"
        className={cn('flex h-9 w-9 items-center justify-center', className)}
        {...props}
    >
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More</span>
    </span>
);
