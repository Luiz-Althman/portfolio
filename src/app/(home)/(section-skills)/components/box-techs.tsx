'use client';

import type { IconType } from 'react-icons';

interface BoxTechsProps {
    h3: string;
    icons: ReadonlyArray<{ icon: IconType; name: string }>;
}

export function BoxTechs({ h3, icons }: BoxTechsProps) {
    return (
        <div className="pb-14 flex flex-col gap-10">
            <h3 className="text-2xl text-white/50">{h3}</h3>
            <div className="flex justify-center items-center gap-8">
                {icons.map(({ icon: Icon, name }, index) => (
                    <div key={index} className="relative group">
                        <Icon className="text-6xl text-purple/50 hover:text-purple-400 transition-colors cursor-pointer" />

                        {/* Tooltip */}
                        <span className="absolute top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm px-2 py-1 rounded-md transition-opacity whitespace-nowrap bg-purple">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
