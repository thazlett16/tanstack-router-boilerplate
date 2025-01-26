import {
    type ComponentPropsWithRef,
    createContext,
    type ElementRef,
    forwardRef,
    useContext,
} from 'react';

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

import { cn } from '@/util/class-name';
import {
    toggleVariants,
    type ToggleVariantsProps,
} from '@/components/ui/toggle';

const ToggleGroupContext = createContext<ToggleVariantsProps>({
    size: 'default',
    variant: 'default',
});

export const ToggleGroup = ({
    className,
    variant,
    size,
    children,
    ...props
}: ComponentPropsWithRef<typeof ToggleGroupPrimitive.Root> &
    ToggleVariantsProps) => (
    <ToggleGroupPrimitive.Root
        className={cn('flex items-center justify-center gap-1', className)}
        {...props}
    >
        <ToggleGroupContext.Provider value={{ variant, size }}>
            {children}
        </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
);

export const ToggleGroupItem = ({
    className,
    children,
    variant,
    size,
    ...props
}: ComponentPropsWithRef<typeof ToggleGroupPrimitive.Item> &
    ToggleVariantsProps) => {
    const context = useContext(ToggleGroupContext);

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
