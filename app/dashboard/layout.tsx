import UserNav from '@/components/UI/UserNav/UserNav';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Panel Aministracyjny',
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <UserNav />
            {children}
        </main>
    );
}
