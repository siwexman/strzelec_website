import './globals.css';
import { Lato } from '@next/font/google';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

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
            <body className={lato.className}>
                <Header />
                <main className="">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
