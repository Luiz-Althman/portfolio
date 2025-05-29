'use client';

import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 0,
        title: 'BHW - Lamark',
        description:
            'E-commerce desenvolvido do zero para a empresa Lamark. Aplicação feita em mobile e desktop.',
        flags: [
            'Online',
            'ReactJs',
            'NextJs',
            'Material UI',
            'Styled-components',
        ],
        src: '/bhw.png',
        alt: 'E-commerce Best Hunter Wine',
        link: 'https://besthunterwine.com.br/',
    },
    {
        id: 1,
        title: 'Hefesto Forge',
        description:
            'Aplicativo web view para ortopedia 4.0 e venda de orteses 3D (scans feitos dentro do app), para desktop e mobile com integração nativa.',
        flags: ['ReactJs', 'Tailwind CSS', 'Typescript', 'Yup'],
        src: '/hefesto.jpg',
        alt: 'Aplicativo da Hefesto Medtech',
    },
    {
        id: 2,
        title: 'Design System',
        description:
            'Design system publicado no NPM. Projeto feito do zero dentro do curso da Rocketseat, com hospedagem no github pages.',
        flags: ['Online', 'ReactJs', 'Stitches', 'Typescript'],
        src: '/storybook.png',
        alt: 'Storybook pessoal',
        link: 'https://luiz-althman.github.io/design-system/?path=/docs/home--docs',
    },
    {
        id: 3,
        title: 'Codecraft - Rockeatseat',
        description:
            'Aplicação onde o usuário pode retirar seu ingresso e criar um link de convite. Onde possui um ranking de quais usuários mais tiveram mais convites.',
        flags: ['ReactJs', 'NextJs v15', 'Tailwind v4', 'Typescript'],
        src: '/codecraft.png',
        alt: 'Plataforma de invites',
    },
    {
        id: 4,
        title: 'Pizza shop',
        description:
            'Sistema de backoffice para gerenciamento de restaurantes com testes unitários. Com login feito por Magic Link',
        flags: ['ReactJs', 'ViteJs', 'ShadCN UI', 'Tailwind CSS'],
        src: '/pizzashop.png',
        alt: 'Plataforma de gestão de restaurantes.',
    },
    {
        id: 5,
        title: '4Kube',
        description:
            'Site feito para uma empresa de DevOps, onde eles conseguiam divulgar seus serviços. Integrado com Typeform.',
        flags: ['Online', 'ReactJs', 'NextJs v13', 'Bootstrap'],
        src: '/4kube.png',
        alt: 'Site institucional para exibição da 4kube',
        link: 'https://4kube.com',
    },
    {
        id: 6,
        title: 'Abrigo de animais',
        description:
            'Site institucional de um abrigo de animais. Feito apenas para desktop e hospedado na Railway.',
        flags: ['ReactJs', 'Vite', 'Tailwind v4', 'Railway'],
        src: '/animal-shelter.jpeg',
        alt: 'Site institucional de abrigo de animais',
    },
    {
        id: 7,
        title: 'Spotify Clone',
        description:
            'Uma aplicação clone do Spotify e com integração do next/intl para tradução (en/pt-br). Feito apenas para desktop.',
        flags: ['ReactJs', 'Nextjs v15', 'Tailwind v4', 'Next/Intl'],
        src: '/spotify.jpeg',
        alt: 'Aplicação clone do Spotify',
    },
    {
        id: 8,
        title: 'Clínica de estética',
        description:
            'Site institucional feito para uma clínica de estética. Desenvolvido com NextJs v15 e TailwindCSS. Site responsivo e muito otimizado e com motion-react para animações.',
        flags: [
            'Online',
            'ReactJs',
            'Nextjs v15',
            'Tailwind v4',
            'Motion React',
        ],
        src: '/beauty-clinic.png',
        alt: 'Site institucional para clínica de estética',
        link: 'https://beauty-clinic-spa.vercel.app',
    },
];

export function Mobile() {
    const [sliderRef] = useKeenSlider({
        mode: 'snap',
        loop: true,
        slides: {
            perView: 1.1,
            spacing: 15,
        },
    });

    return (
        <div className="keen-slider max-w-[350px]" ref={sliderRef}>
            {projects.map((item) => (
                <div
                    key={item.id}
                    className={`max-w-[3250px] keen-slider__slide border rounded-2xl p-6  ${
                        item.id % 2 !== 0 ? 'bg-purple/10' : 'border-purple/50'
                    }`}
                >
                    <div className="flex justify-between">
                        <h3 className=" font-bold text-white pb-2">
                            {item.title}
                        </h3>
                        {item.flags.includes('Online') && item.link && (
                            <div className="flex justify-end">
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    className="text-purple-100 hover:text-purple transition-colors duration-300 font-bold"
                                >
                                    Acessar
                                </Link>
                            </div>
                        )}
                    </div>

                    <p className="text-sm text-white/50 pb-4">
                        {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pb-4">
                        {item.flags.map((flag, index) => (
                            <div
                                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                key={index}
                                className={`rounded-lg px-2 py-1 text-xs ${
                                    flag === 'Online'
                                        ? 'bg-green/30 text-green'
                                        : 'text-purple-100 border border-purple'
                                }`}
                            >
                                <span className="font-bold">{flag}</span>
                            </div>
                        ))}
                    </div>
                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={300}
                        height={200}
                    />
                </div>
            ))}
        </div>
    );
}
