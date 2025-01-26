import { type ComponentPropsWithRef } from 'react';

import { cn } from '@/util/class-name';

export const Table = ({
    className,
    ...props
}: ComponentPropsWithRef<'table'>) => (
    <div className="relative w-full overflow-auto">
        <table
            className={cn('w-full caption-bottom text-sm', className)}
            {...props}
        />
    </div>
);

export const TableHeader = ({
    className,
    ...props
}: ComponentPropsWithRef<'thead'>) => (
    <thead
        className={cn('[&_tr]:border-b', className)}
        {...props}
    />
);

export const TableBody = ({
    className,
    ...props
}: ComponentPropsWithRef<'tbody'>) => (
    <tbody
        className={cn('[&_tr:last-child]:border-0', className)}
        {...props}
    />
);

export const TableFooter = ({
    className,
    ...props
}: ComponentPropsWithRef<'tfoot'>) => (
    <tfoot
        className={cn(
            'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
            className,
        )}
        {...props}
    />
);

export const TableRow = ({
    className,
    ...props
}: ComponentPropsWithRef<'tr'>) => (
    <tr
        className={cn(
            'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
            className,
        )}
        {...props}
    />
);

export const TableHead = ({
    className,
    ...props
}: ComponentPropsWithRef<'th'>) => (
    <th
        className={cn(
            'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
            className,
        )}
        {...props}
    />
);

export const TableCell = ({
    className,
    ...props
}: ComponentPropsWithRef<'td'>) => (
    <td
        className={cn(
            'p-4 align-middle [&:has([role=checkbox])]:pr-0',
            className,
        )}
        {...props}
    />
);

export const TableCaption = ({
    className,
    ...props
}: ComponentPropsWithRef<'caption'>) => (
    <caption
        className={cn('mt-4 text-sm text-muted-foreground', className)}
        {...props}
    />
);
