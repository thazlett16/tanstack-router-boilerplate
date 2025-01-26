import type { ComponentPropsWithRef } from 'react';
import { createLink } from '@tanstack/react-router';

import { type TButtonVariants, buttonVariants } from '@/components/base/button';
import { cn } from '@/util/class-name';

type LinkSizeProp = TButtonVariants['size'];
type LinkVariantProp = Exclude<TButtonVariants['variant'], 'default' | 'destructive' | 'secondary' | 'ghost'>;

interface StyledLinkProps extends ComponentPropsWithRef<'a'> {
    size?: LinkSizeProp;
    variant?: LinkVariantProp;
}

const StyledLink = ({ className, variant = 'outline', size = 'default', ...props }: StyledLinkProps) => (
    <a
        className={cn(buttonVariants({ size, variant }), className)}
        {...props}
    />
);

export const TanStackLink = createLink(StyledLink);

// const CreatedLink = createLink(StyledLink);

// export const TanStackLink: LinkComponent<typeof StyledLink> = ({
//     ...props
// }) => {
//     return <CreatedLink {...props} />;
// };
