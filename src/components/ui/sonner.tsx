import { type ComponentPropsWithRef } from 'react';
import { Toaster as Sonner } from 'sonner';

export const Toaster = ({ ...props }: ComponentPropsWithRef<typeof Sonner>) => {
    // const { theme = 'system' } = useTheme();
    const theme = 'system';

    return (
        <></>
        // <Sonner
        //     theme={theme as ToasterProps['theme']}
        //     className="toaster group"
        //     toastOptions={{
        //         classNames: {
        //             toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        //             description: 'group-[.toast]:text-muted-foreground',
        //             actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        //             cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        //         },
        //     }}
        //     {...props}
        // />
    );
};
