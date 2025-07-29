import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';

export function Mobile() {
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
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full flex items-center justify-center pb-6"
            >
                <Image
                    src="/luiz-website.jpg"
                    className="rounded-full"
                    alt="Foto de perfil do Luiz Althman."
                    width={250}
                    height={250}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className=""
            >
                <InfoTitleRoot className="rounded-lg">
                    <span className="mr-2">🧐</span>
                    <InfoTitleText title="Sobre mim" />
                </InfoTitleRoot>
                <h2 className="text-2xl font-extrabold text-white pt-4">
                    Luiz Henrique <br /> Althman
                </h2>
                <div className="pt-7 pb-12">
                    <p className="text-white/50 text-sm">
                        Mas pode me chamar de Althman, Luiz Althman... Como
                        preferir. Muito prazer! Há mais de 3 anos desenvolvendo
                        e programando interfaces web responsivas com JavaScript,
                        React Js e Typescript. Graduado em Análise e
                        Desenvolvimento de Sistemas pela Faculdade Impacta de
                        São Paulo. Interesses em desenvolvimento Front-end web e
                        mobile com ReactJs, ViteJs, NextJs entre outros.
                    </p>
                    <br />
                    <p>
                        🚀{' '}
                        <span className="text-white/50 text-sm">
                            Buscando sempre ser melhor do que ontem todos os
                            dias!
                        </span>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
