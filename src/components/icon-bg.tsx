import Link from 'next/link';
import type { ComponentProps } from 'react';

interface IconBgRootProps extends ComponentProps<'div'> {}

export function IconBgRoot({ ...props }: IconBgRootProps) {
    return <div className="flex space-x-4 text-white opacity-50" {...props} />;
}

interface IconBgIconProps extends ComponentProps<'a'> {
    icon: React.ReactNode;
    href: string;
}

export function IconBgIcon({ icon, href, ...props }: IconBgIconProps) {
    return (
        <Link
            href={href}
            {...props}
            target="_blank"
            className="bg-white/80 p-2 rounded-full text-dark hover:bg-purple/90 hover:text-white transition-colors duration-300"
        >
            {icon}
        </Link>
    );
}
