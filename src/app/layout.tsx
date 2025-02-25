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
        icon: './favicon.svg',
    },
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
