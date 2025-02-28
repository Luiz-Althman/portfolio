'use client';

import { motion } from 'framer-motion';
import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import { Box } from './components/box';
import { BoxWorksArray, BoxAcademicArray } from '@/mock/section-work-history';
import { Mobile } from './mobile';
import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';

export function SectionWorkHistory() {
    const [sliderRef] = useKeenSlider({
        mode: 'snap',
        loop: true,
        slides: {
            perView: 1.1,
            spacing: 10,
        },
    });

    return (
        <section
            id="carreira"
            className="md:py-28 flex flex-col md:justify-center md:items-center md:border-b md:border-purple/30"
        >
            <div className="md:pb-16 pb-6 md:text-center">
                <InfoTitleRoot>
                    <span className="mr-2">💼</span>
                    <InfoTitleText title="Carreira" />
                </InfoTitleRoot>
                <h2 className="text-5xl font-extrabold text-white pt-4 hidden md:block">
                    Trajetória até aqui
                </h2>
                <h2 className="text-2xl font-extrabold text-white pt-4 md:hidden block">
                    Trajetória <br /> até aqui
                </h2>
            </div>

            <div className="flex flex-col md:flex-row md:gap-16">
                <div>
                    <div className="md:text-center md:pb-16 pb-6">
                        <h3 className="md:text-3xl text-white font-extrabold">
                            Área profissional
                        </h3>
                        <span className="text-white/50 md:text-2xl text-xs">
                            2022 · Atualmente
                        </span>
                    </div>
                    <div className="block md:hidden">
                        <Mobile />
                    </div>
                    <div className="md:block hidden">
                        {BoxWorksArray.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeOut',
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Box
                                    isActive={item.isActive}
                                    description={item.description}
                                    period={item.period}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    time={item.time}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="md:text-center md:pb-16 pb-6">
                        <h3 className="md:text-3xl text-white font-extrabold">
                            Área acadêmica
                        </h3>
                        <span className="text-white/50 md:text-2xl text-xs">
                            2022 · Atualmente
                        </span>
                    </div>
                    <div className="md:block hidden">
                        {BoxAcademicArray.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: 'easeOut',
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Box
                                    isActive={item.isActive}
                                    description={item.description}
                                    period={item.period}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    time={item.time}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <div className="block w-full md:hidden">
                        <div className="keen-slider" ref={sliderRef}>
                            {BoxAcademicArray.map((item) => (
                                <div
                                    key={item.id}
                                    className="keen-slider__slide"
                                >
                                    <Box
                                        isActive={item.isActive}
                                        description={item.description}
                                        period={item.period}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        time={item.time}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
