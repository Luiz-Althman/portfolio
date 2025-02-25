'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import Img from '../../../assets/eu-sorrindo.jpg';
import { Mobile } from './mobile';

export function SectionAbout() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('sobre');
            if (!section) return;

            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="sobre"
            className="pb-12 md:py-28 flex flex-col md:flex-row md:justify-between md:items-center gap-40 md:border-b md:border-purple/30"
        >
            <div className="block md:hidden">
                <Mobile />
            </div>
            <div className="md:flex hidden md:flex-row gap-40">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-1/3"
                >
                    <Image
                        src={Img}
                        className="rounded-full "
                        alt="Foto de perfil, Luiz Althman."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    className="space-y-6 w-2/3"
                >
                    <InfoTitleRoot>
                        <span className="mr-2">🧐</span>
                        <InfoTitleText title="Sobre mim" />
                    </InfoTitleRoot>
                    <h2 className="text-5xl font-extrabold text-white">
                        Luiz Henrique <br /> Althman
                    </h2>
                    <div>
                        <p>
                            👋{' '}
                            <span className="text-white/50">
                                Me chamo Luiz Henrique Althman, mas pode me
                                chamar de Althman, Luiz Althman...Como preferir.
                            </span>
                            😊{' '}
                            <span className="text-white/50">Muito prazer!</span>
                        </p>
                        <br />
                        <p>
                            👨‍💻
                            <span className="text-white/50">
                                Há mais de 3 anos desenvolvendo e programando
                                interfaces web responsivas com JavaScript, React
                                Js e Typescript.
                            </span>
                        </p>
                        <p>
                            🎓{' '}
                            <span className="text-white/50">
                                Graduado em Análise e Desenvolvimento de
                                Sistemas pela Faculdade Impacta de São Paulo.
                            </span>
                        </p>
                        <p>
                            💡{' '}
                            <span className="text-white/50">
                                Interesses em desenvolvimento Front-end web e
                                mobile com ReactJs, ViteJs, NextJs entre outros.
                            </span>
                        </p>
                        <br />
                        <p>
                            🚀{' '}
                            <span className="text-white/50">
                                Buscando sempre ser melhor do que ontem todos os
                                dias!
                            </span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
