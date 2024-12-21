import { type AnchorHTMLAttributes, type ComponentProps } from 'react';
import { createLink, LinkComponent } from '@tanstack/react-router';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/util/class-name';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
type LinkSizeProp = ButtonVariantProps['size'];
type LinkVariantProp = Exclude<
    ButtonVariantProps['variant'],
    'default' | 'destructive' | 'secondary' | 'ghost'
>;

interface BasicLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    size?: LinkSizeProp;
    variant?: LinkVariantProp;
}

const BasicLink = ({
    className,
    variant = 'outline',
    size = 'default',
    ...props
}: BasicLinkProps) => (
    <a
        className={cn(buttonVariants({ size, variant }), className)}
        {...props}
    />
);

const CreatedLink = createLink(BasicLink);

export const CustomLink: LinkComponent<typeof BasicLink> = ({ ...props }) => (
    <CreatedLink {...props} />
);
