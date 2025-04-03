import { Metadata } from 'next';

import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
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
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
