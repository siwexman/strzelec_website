export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="py-6 max-w-maxWidthSm mx-auto">
            <h2 className="text-center">Czasopismo &quot;Strzelec&quot;</h2>
            {children}
        </div>
    );
}
