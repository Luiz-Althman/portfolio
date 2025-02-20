'use client';

import { FaCode } from 'react-icons/fa6';
import { GoFileDirectory } from 'react-icons/go';
import { FaRegCalendarAlt } from 'react-icons/fa';

const boxs = [
    {
        id: 0,
        icon: <FaRegCalendarAlt className="text-4xl" />,
        text: '+ de 3 anos como',
        title: 'Programador',
    },
    {
        id: 1,
        icon: <GoFileDirectory className="text-4xl" />,
        text: '+ de 10 projetos',
        title: 'Desenvolvidos',
    },
    {
        id: 2,
        icon: <FaCode className="text-4xl" />,
        text: '+ de 12 tecnologias',
        title: 'Utilizadas',
    },
];

const labels = [
    {
        id: 0,
        subtitle: 'Desenvolvedor',
        title: 'Front-end',
    },
    {
        id: 1,
        subtitle: 'Dezenas de projetos e',
        title: 'Experiências',
    },
    {
        id: 2,
        subtitle: 'Domínio das tecnologias',
        title: 'Atuais',
    },
];

export function BoxShowcase() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex w-full justify-between gap-20">
                {boxs.map((item) => (
                    <div
                        key={`id-${item.id}`}
                        className={`inline-flex flex-col items-center justify-center  py-10 px-5 w-[246px] h-[200px] rounded-2xl text-purple/80 
                      ${item.id % 2 !== 0 && 'bg-purple/10'} 
                      ${item.id !== 1 && 'border border-purple/50'}`}
                    >
                        <span>{item.icon}</span>
                        <span className="text-white py-2">{item.text}</span>
                        <span className="text-3xl text-white font-bold leading-none">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 py-6 bg-purple/10 rounded-2xl gap-20">
                {labels.map((item) => (
                    <div
                        key={`idx-${item.id}`}
                        className="flex flex-col items-center justify-center text-purple text-left"
                    >
                        <span className="">{item.subtitle}</span>
                        <span className="font-bold text-3xl">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
