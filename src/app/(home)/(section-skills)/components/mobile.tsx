'use client';

import type { IconType } from 'react-icons';

interface MobileProps {
    h3: string;
    icons: ReadonlyArray<{ icon: IconType; name: string }>;
}

export function Mobile({ h3, icons }: MobileProps) {
    return (
        <div className="pb-14 flex flex-col gap-10">
            <h3 className="text-2xl text-white/50">{h3}</h3>
            <div className="grid grid-cols-3 gap-6">
                {icons.map(({ icon: Icon, name }, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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
