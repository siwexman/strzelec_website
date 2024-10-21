import './globals.css';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body>
                <Header />
                <main className="max-w-maxWidth mx-auto">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
