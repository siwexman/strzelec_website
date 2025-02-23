import LayoutDashboardItems from '@/components/Layouts/LayoutDashboardItems';

export default function DashboardPostsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LayoutDashboardItems title="Wszystkie aktualności">
            {children}
        </LayoutDashboardItems>
    );
}
