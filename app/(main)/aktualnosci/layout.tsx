export default function PostsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="max-w-maxWidthSm mx-auto">{children}</div>;
}
