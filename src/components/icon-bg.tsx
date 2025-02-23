import Link from 'next/link';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconBgRootProps extends ComponentProps<'div'> {
    className?: string;
}

export function IconBgRoot({ className, ...props }: IconBgRootProps) {
    return (
        <div
            className={twMerge(
                'flex space-x-4 text-white opacity-50',
                className
            )}
            {...props}
        />
    );
}

interface IconBgIconProps extends ComponentProps<'a'> {
    icon: React.ReactNode;
    href: string;
    className?: string;
}

export function IconBgIcon({
    className,
    icon,
    href,
    ...props
}: IconBgIconProps) {
    return (
        <Link
            href={href}
            {...props}
            target="_blank"
            className={twMerge(
                'bg-white/80 p-2 rounded-full text-dark hover:bg-purple/90 hover:text-white transition-colors duration-300',
                className
            )}
        >
            {icon}
        </Link>
    );
}
