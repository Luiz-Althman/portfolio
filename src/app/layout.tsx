import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Luiz Althman | Desenvolvedor Front-end',
    description:
        'Sou Luiz Althman, desenvolvedor front-end especializado em React e Next.js. Crio interfaces modernas, acessíveis e otimizadas para performance e SEO. Confira meus projetos e entre em contato!',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'DEV - Luiz Althman',
        description:
            'Portfólio de Luiz Althman - Desenvolvedor Front-end com foco em React, Next.js e interfaces modernas.',
        url: 'https://devluizalthman.vercel.app',
        siteName: 'Luiz Althman Dev',
        images: [
            {
                url: 'https://devluizalthman.vercel.app/opengraph.webp',
                width: 1200,
                height: 630,
                alt: 'Imagem de capa do portfólio de Luiz Althman',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DEV - Luiz Althman',
        description:
            'Portfólio de Luiz Althman - Desenvolvedor Front-end com foco em React, Next.js e interfaces modernas.',
        images: ['https://devluizalthman.vercel.app/twitter.webp'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className={`${raleway.variable}`}>
            <body className="bg-dark antialiased">
                <main className="">{children}</main>
            </body>
        </html>
    );
}
