'use client';

import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import { BoxTechs } from './components/box-techs';
import { motion } from 'framer-motion';
import { Mobile } from './components/mobile';

import {
    FaHtml5,
    FaJs,
    FaReact,
    FaCss3Alt,
    FaBootstrap,
    FaDocker,
} from 'react-icons/fa';
import {
    SiTypescript,
    SiTailwindcss,
    SiVite,
    SiZod,
    SiReactquery,
    SiAxios,
    SiReacthookform,
    SiCssmodules,
    SiStyledcomponents,
    SiPostgresql,
    SiSwagger,
} from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { RxStitchesLogo } from 'react-icons/rx';

export function SectionSkills() {
    return (
        <section
            id="skills"
            className="md:py-28 py-12 flex flex-col justify-center items-center md:border-b md:border-purple/30"
        >
            <div className="block md:hidden">
                <div className="">
                    <InfoTitleRoot>
                        <span className="mr-2">👨‍💻</span>
                        <InfoTitleText title="Skills · Experiências" />
                    </InfoTitleRoot>
                    <h2 className="text-5xl font-extrabold text-white pt-6">
                        Tecnologias e habilidades
                    </h2>
                </div>
                <div>
                    <Mobile
                        h3="Techs que uso no dia a dia"
                        icons={[
                            { icon: FaReact, name: 'ReactJs' },
                            { icon: FaJs, name: 'JavaScript' },
                            { icon: FaHtml5, name: 'HTML 5' },
                            { icon: SiTypescript, name: 'TypeScript' },
                            { icon: SiTailwindcss, name: 'Tailwind CSS' },
                            { icon: SiZod, name: 'Zod' },
                            { icon: SiReactquery, name: 'React Query' },
                            { icon: SiReacthookform, name: 'React Hook Form' },
                            { icon: FiGithub, name: 'GitHub' },
                            { icon: RiNextjsFill, name: 'NextJs' },
                        ]}
                    />
                </div>

                <div>
                    <Mobile
                        h3="Outras techs com que já utilizei em projetos"
                        icons={[
                            { icon: SiCssmodules, name: 'CSS Modules' },
                            {
                                icon: SiStyledcomponents,
                                name: 'Styled Components',
                            },
                            { icon: SiAxios, name: 'Axios' },
                            { icon: FaCss3Alt, name: 'CSS' },
                            { icon: FaBootstrap, name: 'Bootstrap' },
                            { icon: SiVite, name: 'ViteJs' },
                            { icon: SiPostgresql, name: 'PostgreSQL' },
                            { icon: FaDocker, name: 'Docker' },
                            { icon: SiSwagger, name: 'Swagger' },
                            { icon: RxStitchesLogo, name: 'Stitches' },
                        ]}
                    />
                </div>
            </div>
            <div className="text-center hidden md:block">
                <div className="pb-24">
                    <InfoTitleRoot>
                        <span className="mr-2">👨‍💻</span>
                        <InfoTitleText title="Skills · Experiências" />
                    </InfoTitleRoot>
                    <h2 className="text-5xl font-extrabold text-white pt-6">
                        Tecnologias e habilidades
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <BoxTechs
                        h3="Techs que uso no dia a dia"
                        icons={[
                            { icon: FaReact, name: 'ReactJs' },
                            { icon: FaJs, name: 'JavaScript' },
                            { icon: FaHtml5, name: 'HTML 5' },
                            { icon: SiTypescript, name: 'TypeScript' },
                            { icon: SiTailwindcss, name: 'Tailwind CSS' },
                            { icon: SiZod, name: 'Zod' },
                            { icon: SiReactquery, name: 'React Query' },
                            { icon: SiReacthookform, name: 'React Hook Form' },
                            { icon: FiGithub, name: 'GitHub' },
                            { icon: RiNextjsFill, name: 'NextJs' },
                        ]}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <BoxTechs
                        h3="Outras techs com que já utilizei em projetos"
                        icons={[
                            { icon: SiCssmodules, name: 'CSS Modules' },
                            {
                                icon: SiStyledcomponents,
                                name: 'Styled Components',
                            },
                            { icon: SiAxios, name: 'Axios' },
                            { icon: FaCss3Alt, name: 'CSS' },
                            { icon: FaBootstrap, name: 'Bootstrap' },
                            { icon: SiVite, name: 'ViteJs' },
                            { icon: SiPostgresql, name: 'PostgreSQL' },
                            { icon: FaDocker, name: 'Docker' },
                            { icon: SiSwagger, name: 'Swagger' },
                            { icon: RxStitchesLogo, name: 'Stitches' },
                        ]}
                    />
                </motion.div>
            </div>
        </section>
    );
}
