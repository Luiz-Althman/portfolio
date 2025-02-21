'use client';

import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import { BoxTechs } from './components/box-techs';
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
            className="py-28 flex flex-col justify-center items-center border-b border-purple/30"
        >
            <div className="text-center">
                <div className="pb-24">
                    <InfoTitleRoot>
                        <span className="mr-2">👨‍💻</span>
                        <InfoTitleText title="Skills · Experiências" />
                    </InfoTitleRoot>
                    <h2 className="text-5xl font-extrabold text-white pt-6">
                        Tecnologias e habilidades
                    </h2>
                </div>
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
                <BoxTechs
                    h3="Outras techs com que já utilizei em projetos"
                    icons={[
                        { icon: SiCssmodules, name: 'CSS Modules' },
                        { icon: SiStyledcomponents, name: 'Styled Components' },
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
        </section>
    );
}
