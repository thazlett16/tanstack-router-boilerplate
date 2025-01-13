import { type ComponentProps } from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/util/class-name';

interface BreadcrumbProps extends ComponentProps<'nav'> {}

export const Breadcrumb = ({ ...props }: BreadcrumbProps) => (
    <nav
        aria-label="breadcrumb"
        {...props}
    />
);

interface BreadcrumbListProps extends ComponentProps<'ol'> {}

export const BreadcrumbList = ({
    className,
    ...props
}: BreadcrumbListProps) => (
    <ol
        className={cn(
            'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
            className,
        )}
        {...props}
    />
);

interface BreadcrumbItemProps extends ComponentProps<'li'> {}

export const BreadcrumbItem = ({
    className,
    ...props
}: BreadcrumbItemProps) => (
    <li
        className={cn('inline-flex items-center gap-1.5', className)}
        {...props}
    />
);

interface BreadcrumbLinkProps extends ComponentProps<'a'> {}

export const BreadcrumbLink = ({
    className,
    ...props
}: BreadcrumbLinkProps) => {
    return (
        <a
            className={cn('transition-colors hover:text-foreground', className)}
            {...props}
        />
    );
};

interface BreadcrumbPageProps extends ComponentProps<'span'> {}

export const BreadcrumbPage = ({
    className,
    ...props
}: BreadcrumbPageProps) => (
    <span
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn('font-normal text-foreground', className)}
        {...props}
    />
);

interface BreadcrumbSeparatorProps extends ComponentProps<'li'> {}

export const BreadcrumbSeparator = ({
    children,
    className,
    ...props
}: BreadcrumbSeparatorProps) => (
    <li
        role="presentation"
        aria-hidden="true"
        className={cn('[&>svg]:h-3.5 [&>svg]:w-3.5', className)}
        {...props}
    >
        {children ?? <ChevronRight />}
    </li>
);

interface BreadcrumbEllipsisProps extends ComponentProps<'span'> {}

export const BreadcrumbEllipsis = ({
    className,
    ...props
}: BreadcrumbEllipsisProps) => (
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
