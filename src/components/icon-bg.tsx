import type { ComponentProps } from 'react';

interface IconBgRootProps extends ComponentProps<'div'> {}

export function IconBgRoot({ ...props }: IconBgRootProps) {
    return <div className="flex space-x-4 text-white opacity-50" {...props} />;
}

interface IconBgIconProps extends ComponentProps<'span'> {
    icon: React.ReactNode;
}

export function IconBgIcon(icon: IconBgIconProps) {
    return (
        <span className="bg-white/80 p-2 rounded-full text-dark">
            {icon.icon}
        </span>
    );
}
