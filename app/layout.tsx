import { Metadata } from 'next';

import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
    title: 'Związek Strzelecki',
    description: 'lorem ipsums ocas as dasdaisd',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body className={lato.className}>{children}</body>
        </html>
    );
}
