import { ModalProvider } from '@/components/context/ModalContext';

import MainLayout from '@/components/layouts/MainLayout';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ModalProvider>
            <MainLayout>{children}</MainLayout>
        </ModalProvider>
    );
}
