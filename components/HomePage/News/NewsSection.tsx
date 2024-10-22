import NewsComponents from './NewsComponents';

export default function NewsSection() {
    return (
        <section className="py-8 w-full max-w-maxWidth mx-auto">
            <div className="text-center pb-4">
                <h2>Sprawdź najświeższe aktualności</h2>
            </div>
            <NewsComponents />
        </section>
    );
}
