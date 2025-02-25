'use client';

import type { ComponentProps } from 'react';

interface BoxProps extends ComponentProps<'div'> {
    isActive?: boolean;
    role: string;
    subtitle: string;
    description: string;
    time: string;
    period?: string;
}

export function Box({ isActive = false, ...props }: BoxProps) {
    return (
        <div
            {...props}
            className={`rounded-2xl md:p-8 p-4 mb-16 min-w-[297px] h-[202px] md:max-w-[580px] md:h-[220px] ${
                isActive ? 'bg-purple/10' : 'border border-purple/50 '
            }`}
        >
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 min-h-[140px] md:min-h-0">
                    <h4 className="text-white md:text-xl font-bold">
                        {props.role}
                    </h4>
                    <span className="text-white/50 text-sm md:text-lg">
                        {props.subtitle}
                    </span>
                    <p className="text-white/50 heading md:text-base text-sm">
                        {props.description}
                    </p>
                </div>
                <footer className="flex justify-between items-center">
                    <span className="text-purple font-bold text-xs md:text-xl">
                        {props.time}
                    </span>
                    <span className="text-purple md:text-purple/50 font-bold md:font-normal text-xs md:text-xl">
                        {props.period}
                    </span>
                </footer>
            </div>
        </div>
    );
}
