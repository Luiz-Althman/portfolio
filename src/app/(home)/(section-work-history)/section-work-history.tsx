'use client';

import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import { Box } from './components/box';
import { BoxWorksArray, BoxAcademicArray } from '@/mock/section-work-history';

export function SectionWorkHistory() {
    return (
        <section
            id="carreira"
            className="py-28 flex flex-col justify-center items-center border-b border-purple/30"
        >
            <div className="pb-16 text-center">
                <InfoTitleRoot>
                    <span className="mr-2">💼</span>
                    <InfoTitleText title="Carreira" />
                </InfoTitleRoot>
                <h2 className="text-5xl font-extrabold text-white pt-6">
                    Trajetória até aqui
                </h2>
            </div>

            <div className="flex gap-16">
                <div>
                    <div className="text-center pb-16">
                        <h3 className="text-3xl text-white font-extrabold">
                            Área profissional
                        </h3>
                        <span className="text-white/50 text-2xl">
                            2022 · Atualmente
                        </span>
                    </div>
                    {BoxWorksArray.map((item) => (
                        <Box
                            key={item.id}
                            isActive={item.isActive && true}
                            description={item.description}
                            period={item.period}
                            role={item.role}
                            subtitle={item.subtitle}
                            time={item.time}
                        />
                    ))}
                </div>
                <div>
                    <div className="text-center pb-16">
                        <h3 className="text-3xl text-white font-extrabold">
                            Acadêmica
                        </h3>
                        <span className="text-white/50 text-2xl">
                            2022 · Atualmente
                        </span>
                    </div>
                    {BoxAcademicArray.map((item) => (
                        <Box
                            key={item.id}
                            isActive={item.isActive && true}
                            description={item.description}
                            period={item.period}
                            role={item.role}
                            subtitle={item.subtitle}
                            time={item.time}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
