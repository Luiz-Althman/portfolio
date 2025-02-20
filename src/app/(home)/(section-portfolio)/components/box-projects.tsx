'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FaArrowRight } from 'react-icons/fa';

import teste from '../../../../assets/image-test.png';

const projects = [
    {
        id: 0,
        title: 'Project 1',
        description: 'Description of project 1',
        flags: ['ReactJs', 'NextJs', 'Typescript'],
        src: teste,
        alt: 'text alt',
    },
    {
        id: 1,
        title: 'Project 2',
        description: 'Description of project 2',
        flags: ['ReactJs', 'NextJs', 'Typescript'],
        src: teste,
        alt: 'text alt',
    },
    {
        id: 2,
        title: 'Project 3',
        description: 'Description of project 4',
        flags: ['ReactJs', ' NextJs', 'Typescript'],
        src: teste,
        alt: 'text alt',
    },
    {
        id: 3,
        title: 'Project 4',
        description: 'Description of project 4',
        flags: ['ReactJs', 'NextJs', 'Typescript'],
        src: teste,
        alt: 'text alt',
    },
    {
        id: 4,
        title: 'Project 5',
        description: 'Description of project 5',
        flags: ['ReactJs', 'NextJs', 'Typescript'],
        src: teste,
        alt: 'text alt',
    },
    {
        id: 5,
        title: 'Project 6',
        description: 'Description of project 6',
        flags: ['Online', 'NextJs', 'Typescript'],
        src: teste,
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
