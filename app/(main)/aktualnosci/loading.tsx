export default function loading() {
    return (
        <div className="max-w-maxWidthSm mx-auto py-8">
            <h2 className="text-center py-4">Wszystkie aktualności</h2>
            <div className="py-4">
                <ul className="space-y-4">
                    {[...Array(5).keys()].map(i => (
                        <li key={i}>
                            <p className="h-36 bg-gray-300 animate-pulse rounded" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
