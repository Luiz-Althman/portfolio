import './globals.css';

import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'DEV - Luiz Althman',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${raleway.variable}`}>
            <body className="bg-dark antialiased">
                <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-9">
                    {children}
                </main>
            </body>
        </html>
    );
}
