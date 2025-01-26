import type { ComponentPropsWithRef } from 'react';
import type { LinkComponent } from '@tanstack/react-router';
import { createLink } from '@tanstack/react-router';
import type { VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/util/class-name';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
type LinkSizeProp = ButtonVariantProps['size'];
type LinkVariantProp = Exclude<
    ButtonVariantProps['variant'],
    'default' | 'destructive' | 'secondary' | 'ghost'
>;

//Only using some of the buttonVariants variant options
interface StyledLinkProps extends ComponentProps<'a'> {
    size?: LinkSizeProp;
    variant?: LinkVariantProp;
}

// Docs show this, but it doesn't have a ref when we remove forwardRef in React19
// interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
//     size?: LinkSizeProp;
//     variant?: LinkVariantProp;
// }

const StyledLink = ({
    className,
    variant = 'outline',
    size = 'default',
    ...props
}: StyledLinkProps) => (
    <a
        className={cn(buttonVariants({ size, variant }), className)}
        {...props}
    />
);

const CreatedLink = createLink(StyledLink);

export const TanStackLink: LinkComponent<typeof StyledLink> = ({
    ...props
}) => <CreatedLink {...props} />;
