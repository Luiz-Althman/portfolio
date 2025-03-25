'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import axios from 'axios';

type BoxProjectsProps = {
    id: number;
    name: string;
    description: string;
    flags: string[];
    image: string;
    url: string;
    alt: string;
};

export function BoxProjects() {
    const [isVisible, setIsVisible] = useState(false);
    const [projectsStripe, setProjectsStripe] = useState<BoxProjectsProps[]>(
        []
    );

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('projects-section');
            if (!section) return;

            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        async function handleProjects() {
            try {
                const baseUrl =
                    process.env.NEXT_PUBLIC_SITEE_URL ||
                    'http://localhost:3000';

                const response = await axios.get(`${baseUrl}/api/projects`);

                const updatedProjects = response.data.map(
                    (item: BoxProjectsProps) => {
                        return {
                            ...item,
                            flags:
                                typeof item.flags === 'string'
                                    ? JSON.parse(item.flags)
                                    : item.flags,
                        };
                    }
                );

                setProjectsStripe(updatedProjects);
                console.log('data =>', updatedProjects);
            } catch (err) {
                console.error('Erro ao buscar projetos:', err);
            }
        }

        handleProjects();
    }, []);

    return (
        <div
            id="projects-section"
            className="flex flex-col md:grid md:grid-cols-3 gap-12"
        >
            {projectsStripe.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        ease: 'easeOut',
                        delay: index * 0.1,
                    }}
                    className={`w-full border rounded-2xl p-7 ${
                        item.id % 2 !== 0 ? 'bg-purple/10' : 'border-purple/50'
                    }`}
                >
                    <div className="flex justify-between">
                        <h3 className="text-xl font-bold text-white pb-2">
                            {item.name}
                        </h3>
                        {item.flags[0] === 'Online' && (
                            <div className="flex justify-end">
                                <Link
                                    href={item.url || ''}
                                    target="_blank"
                                    className="text-purple-100 hover:text-purple transition-colors duration-300 font-bold"
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
                                className={`rounded-lg px-2 py-1 ${
                                    flag === 'Online'
                                        ? 'bg-green/30 text-green'
                                        : 'text-purple border border-purple'
                                }`}
                            >
                                <span className="font-bold">{flag}</span>
                            </div>
                        ))}
                    </div>
                    <Image
                        src={item.image}
                        alt={item.alt}
                        width={300}
                        height={200}
                    />
                </motion.div>
            ))}
             
        </div>
    );
}
