'use client';

import Image from 'next/image';
import Link from 'next/link';

import bhw from '../../../../assets/bhw.png';
import hefesto from '../../../../assets/hefesto.jpg';
import storybook from '../../../../assets/storybook.png';
import kube from '../../../../assets/4kube.png';
import codecraft from '../../../../assets/codecraft.png';
import pizzashop from '../../../../assets/pizzashop.png';

const projects = [
    {
        id: 0,
        title: 'Best Hunter Wine',
        description:
            'E-commerce desenvolvido do zero para a empresa Best Hunter Wine. Aplicação feita em mobile e desktop.',
        flags: ['Online', 'ReactJs', 'NextJs', 'Material UI'],
        src: bhw,
        alt: 'text alt',
        link: 'https://besthunterwine.com.br/',
    },
    {
        id: 1,
        title: 'Hefesto Medtech',
        description:
            'Aplicativo web view para ortopedia 4.0 e venda de orteses 3D (scans feitos dentro do app), para desktop e mobile com integração nativa.',
        flags: ['ReactJs', 'Tailwind CSS', 'Typescript', 'Yup'],
        src: hefesto,
        alt: 'text alt',
    },
    {
        id: 2,
        title: 'Design System',
        description:
            'Design system publicado no NPM. Projeto feito do zero dentro do curso da Rocketseat, com hospedagem no github pages.',
        flags: ['Online', 'ReactJs', 'Stitches', 'Typescript'],
        src: storybook,
        alt: 'text alt',
        link: 'https://luiz-althman.github.io/design-system/?path=/docs/home--docs',
    },
    {
        id: 3,
        title: 'Codecraft',
        description:
            'Aplicação onde o usuário pode retirar seu ingresso e criar um link de convite.',
        flags: ['ReactJs', 'NextJs', 'Tailwind CSS', 'Rockeatseat', 'Zod'],
        src: codecraft,
        alt: 'text alt',
    },
    {
        id: 4,
        title: 'Pizza shop',
        description:
            'Sistema de backoffice para gerenciamento de restaurantes com testes unitários.',
        flags: ['ReactJs', 'ViteJs', 'Typescript', 'Tailwind CSS'],
        src: pizzashop,
        alt: 'text alt',
    },
    {
        id: 5,
        title: '4Kube',
        description:
            'Site feito para uma empresa de DevOps, onde eles conseguiam divulgar seus serviços. Integrado com Typeform.',
        flags: ['Online', 'ReactJs', 'NextJs', 'Bootstrap'],
        src: kube,
        alt: 'text alt',
        link: 'https://4kube.com',
    },
];

export function BoxProjects() {
    return (
        <div className="grid grid-cols-3 gap-12">
            {projects.map((item) => (
                <div
                    key={item.id}
                    className={`w-full border rounded-2xl p-7 ${
                        item.id % 2 !== 0 ? 'bg-purple/10' : 'border-purple/50'
                    }`}
                >
                    <div className="flex justify-between">
                        <h3 className="text-xl font-bold text-white pb-2">
                            {item.title}
                        </h3>
                        {item.flags[0] === 'Online' && (
                            <div className="flex justify-end">
                                <Link
                                    href={item.link || ''}
                                    target="_blanck"
                                    className="text-purple/80 hover:text-purple transition-colors duration-300 font-bold"
                                >
                                    Acessar
                                </Link>
                            </div>
                        )}
                    </div>

                    <p className="text-sm text-white/50 pb-8">
                        {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pb-6">
                        {item.flags.map((flag, index) => (
                            <div
                                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                key={index}
                                className={`rounded-lg  px-2 py-1 ${
                                    flag === 'Online'
                                        ? 'bg-green/30 text-green'
                                        : 'text-purple bg-purple/10'
                                }`}
                            >
                                <span className=" font-bold">{flag}</span>
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
