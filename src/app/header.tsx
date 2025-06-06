'use client';

import Image from 'next/image';
import logo from '../assets/logo.svg';
import Link from 'next/link';
import { useState } from 'react';

const menus = [
    { name: 'Sobre mim', id: '#sobre' },
    { name: 'Portfólio', id: '#portfolio' },
    { name: 'Skills', id: '#skills' },
    { name: 'Carreira', id: '#carreira' },
    { name: 'Contato', id: '#contato' },
];

export function Header() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const handleActive = (activeId: string) => {
        setActiveSection(activeId);
    };
    return (
        <header
            id="section-banner"
            className="hidden md:flex-1 md:flex items-center justify-between bg-purple/10  rounded-xl py-3 px-6"
        >
            <div className="flex flex-center">
                <Link href="/">
                    <Image src={logo} alt="Logo" className="size-9" />
                </Link>
            </div>
            <nav className="flex items-center text-white gap-4 opacity-60 data-[active='true']:text-purple">
                {menus.map((item) => (
                    <Link
                        href={`${item.id}`}
                        key={item.id}
                        onClick={() => handleActive(item.id)}
                        data-active={activeSection === item.id}
                        className="duration-200 data-[active=true]:text-purple data-[active=true]:font-bold hover:text-purple hover:font-bold transition-colors "
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
