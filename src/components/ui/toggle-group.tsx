import { type ComponentPropsWithRef, createContext, useContext } from 'react';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

import { cn } from '@/util/class-name';
import { toggleVariants, type TToggleVariants } from '@/components/ui/toggle';

const ToggleGroupContext = createContext<TToggleVariants | null>(null);

export const ToggleGroup = ({
    className,
    variant = 'default',
    size = 'default',
    children,
    ...props
}: ComponentPropsWithRef<typeof ToggleGroupPrimitive.Root> & TToggleVariants) => (
    <ToggleGroupPrimitive.Root
        className={cn('flex items-center justify-center gap-1', className)}
        {...props}
    >
        <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
);

export const ToggleGroupItem = ({
    className,
    children,
    variant,
    size,
    ...props
}: ComponentPropsWithRef<typeof ToggleGroupPrimitive.Item> & TToggleVariants) => {
    const context = useContext(ToggleGroupContext);

    if (context === null) {
        throw new Error('ToggleGroupItem must be used within a ToggleGroup');
    }

    return (
        <ToggleGroupPrimitive.Item
            className={cn(
                toggleVariants({
                    variant: context.variant || variant,
                    size: context.size || size,
                }),
                className,
            )}
            {...props}
        >
            {children}
        </ToggleGroupPrimitive.Item>
    );
};
