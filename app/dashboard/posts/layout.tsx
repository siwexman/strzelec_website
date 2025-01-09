export default function DashboardPostsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h2 className="text-center py-4 mb-4">Wszystkie aktualności</h2>
            {children}
        </div>
    );
}
