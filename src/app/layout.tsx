import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'DEV - Luiz Althman',
    icons: {
        icon: '/favicon.svg',
    },
    description:
        'Explore meu portfólio e conheça meus projetos como desenvolvedor front-end. Especializado em React, Next.js e tecnologias modernas, crio interfaces dinâmicas, acessíveis e otimizadas para a melhor experiência do usuário. Veja meus trabalhos, minhas habilidades e entre em contato para colaborações!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${raleway.variable}`}>
            <body className="bg-dark antialiased">
                <main className="">{children}</main>
            </body>
        </html>
    );
}
