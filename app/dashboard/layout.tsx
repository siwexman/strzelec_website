import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Panel Aministracyjny',
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main>{children}</main>;
}
