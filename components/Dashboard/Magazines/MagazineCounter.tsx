export default function MagazineCounter({
    counter,
}: {
    counter: number | undefined;
}) {
    if (!counter) {
        return (
            <p className="text-yellow-600">Nie udało się wyświetlić licznika</p>
        );
    }

    return (
        <div className="absolute w-full -bottom-1 translate-y-full rounded-xl py-1 bg-blue-50">
            <p className="text-lg text-blue-500">
                Zostało {counter} prób przesłania czasopisma
            </p>
            <p className="text-sm">Licznik kasuje się każdego dnia</p>
        </div>
    );
}
