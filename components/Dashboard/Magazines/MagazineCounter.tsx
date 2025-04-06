export default function MagazineCounter({
    counter,
}: {
    counter: number | undefined;
}) {
    return (
        <div className="absolute w-full -bottom-1 translate-y-full rounded-xl py-1 bg-blue-50">
            <p className="text-sm md:text-lg text-blue-500 font-semibold">
                Zostało{' '}
                {!counter ? (
                    <span className="text-yellow-600">--</span>
                ) : (
                    <span>{counter}</span>
                )}{' '}
                prób przesłania czasopisma
            </p>
            <p className="text-xs md:text-sm">
                Licznik kasuje się każdego dnia
            </p>
        </div>
    );
}
