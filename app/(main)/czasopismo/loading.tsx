export default function Loading() {
    return (
        <div className="py-4 max-w-maxWidthSm mx-auto">
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-8">
                {[...Array(4).keys()].map(i => (
                    <div
                        key={i}
                        className="rounded h-64 w-full bg-gray-200 animate-pulse"
                        style={{
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '1s',
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}
