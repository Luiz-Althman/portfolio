'use client';

import { motion } from 'framer-motion';
import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import { Box } from './components/box';
import { BoxWorksArray, BoxAcademicArray } from '@/mock/section-work-history';
import { Mobile } from './mobile';

export function SectionWorkHistory() {
    return (
        <section
            id="carreira"
            className="md:py-28 py-12 flex flex-col justify-center items-center md:border-b md:border-purple/30"
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

            <div className="flex flex-col md:flex-row gap-16">
                <div>
                    <div className="text-center pb-16">
                        <h3 className="text-3xl text-white font-extrabold">
                            Área profissional
                        </h3>
                        <span className="text-white/50 text-2xl">
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
                                    role={item.role}
                                    subtitle={item.subtitle}
                                    time={item.time}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-center pb-16">
                        <h3 className="text-3xl text-white font-extrabold">
                            Área acadêmica
                        </h3>
                        <span className="text-white/50 text-2xl">
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
                                    role={item.role}
                                    subtitle={item.subtitle}
                                    time={item.time}
                                />
                            </motion.div>
                        ))}
                    </div>
                    {/* <div className="block md:hidden">
                        <Mobile />
                    </div> */}
                </div>
            </div>
        </section>
    );
}
