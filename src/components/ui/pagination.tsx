import { type ComponentPropsWithRef } from 'react';

import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/util/class-name';

import { type ButtonVariants, buttonVariants } from '@/components/ui/button';

const Pagination = ({ className, ...props }: ComponentPropsWithRef<'nav'>) => (
    <nav
        role="navigation"
        aria-label="pagination"
        className={cn('mx-auto flex w-full justify-center', className)}
        {...props}
    />
);

const PaginationContent = ({
    className,
    ...props
}: ComponentPropsWithRef<'ul'>) => (
    <ul
        className={cn('flex flex-row items-center gap-1', className)}
        {...props}
    />
);

const PaginationItem = ({ ...props }: ComponentPropsWithRef<'li'>) => (
    <li {...props} />
);

const PaginationLink = ({
    className,
    isActive,
    size = 'icon',
    ...props
}: ComponentPropsWithRef<'a'> &
    ComponentPropsWithRef<'button'> &
    Pick<ButtonVariants, 'size'> & {
        isActive?: boolean;
    }) => (
    <a
        aria-current={isActive ? 'page' : undefined}
        className={cn(
            buttonVariants({
                variant: isActive ? 'outline' : 'ghost',
                size,
            }),
            className,
        )}
        {...props}
    />
);

const PaginationPrevious = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to previous page"
        size="default"
        className={cn('gap-1 pl-2.5', className)}
        {...props}
    >
        <ChevronLeft className="h-4 w-4" />
        <span>Previous</span>
    </PaginationLink>
);

const PaginationNext = ({
    className,
    ...props
}: ComponentPropsWithRef<typeof PaginationLink>) => (
    <PaginationLink
        aria-label="Go to next page"
        size="default"
        className={cn('gap-1 pr-2.5', className)}
        {...props}
    >
        <span>Next</span>
        <ChevronRight className="h-4 w-4" />
    </PaginationLink>
);

const PaginationEllipsis = ({
    className,
    ...props
}: ComponentPropsWithRef<'span'>) => (
    <span
        aria-hidden
        className={cn('flex h-9 w-9 items-center justify-center', className)}
        {...props}
    >
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">More pages</span>
    </span>
);
