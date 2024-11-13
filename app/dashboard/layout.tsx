import MainDashboardLayout from '@/components/layouts/MainDashboardLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Panel Aministracyjny',
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <MainDashboardLayout>{children}</MainDashboardLayout>;
}
