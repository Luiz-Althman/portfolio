'use client';

import type { ComponentProps } from 'react';

interface BoxProps extends ComponentProps<'div'> {
    isActive?: boolean;
    role: string;
    subtitle: string;
    description: string;
    time: string;
    period: string;
}

export function Box({ isActive = false, ...props }: BoxProps) {
    return (
        <div
            {...props}
            className={`rounded-2xl p-8 mb-16 md:max-w-[580px] md:max-h-[220px] ${
                isActive ? 'bg-purple/10' : 'border border-purple/50 '
            }`}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h4 className="text-white text-xl font-bold">
                        {props.role}
                    </h4>
                    <span className="text-white/50 text-lg">
                        {props.subtitle}
                    </span>
                    <p className="text-white/50 heading">{props.description}</p>
                </div>
                <footer className="flex justify-between items-center">
                    <span className="text-purple font-bold text-xl">
                        {props.time}
                    </span>
                    <span className="text-purple/50 text-xl">
                        {props.period}
                    </span>
                </footer>
            </div>
        </div>
    );
}
