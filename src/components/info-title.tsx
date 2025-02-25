import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface InfoTitleRootProps extends ComponentProps<'div'> {}

export function InfoTitleRoot({ className, ...props }: InfoTitleRootProps) {
    return (
        <div
            className={twMerge(
                'inline-flex items-center justify-center bg-purple/5 md:text-xl text-sm leading-none  rounded-2xl px-2 py-1.5 font-bold',
                className
            )}
            {...props}
        />
    );
}

interface InfoTitleIconProps {
    icon: React.ReactNode;
}

export function InfoTitleIcon(icon: InfoTitleIconProps) {
    return <span className="mr-2 text-white/80">{icon.icon}</span>;
}

interface InfoTitleTextProps extends ComponentProps<'p'> {
    title: string;
}

export function InfoTitleText({ title, ...props }: InfoTitleTextProps) {
    return (
        <p {...props} className="text-purple ">
            {title}
        </p>
    );
}
