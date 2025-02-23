import LayoutDashboardItems from '@/components/Layouts/LayoutDashboardItems';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutDashboardItems title="Wszytkie czasopisma">
            {children}
        </LayoutDashboardItems>
    );
}
