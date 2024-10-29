import './globals.css';
import { Lato } from 'next/font/google';
import { ModalProvider } from '@/components/context/ModalContext';

import MainLayout from '@/components/layouts/MainLayout';

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <title>Zwiazek Strzelecki</title>
            <body className={lato.className}>
                <ModalProvider>
                    <MainLayout>{children}</MainLayout>
                </ModalProvider>
            </body>
        </html>
    );
}
