import { type ComponentPropsWithRef } from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/util/class-name';

export const labelVariants = cva(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
);

export type TLabelVariants = VariantProps<typeof labelVariants>;

export const Label = ({ className, ...props }: ComponentPropsWithRef<typeof LabelPrimitive.Root> & TLabelVariants) => (
    <LabelPrimitive.Root
        className={cn(labelVariants(), className)}
        {...props}
    />
);
