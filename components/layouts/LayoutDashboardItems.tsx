export default function LayoutDashboardItems({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h2 className="text-center py-4 mb-4">{title}</h2>
            {children}
        </div>
    );
}
