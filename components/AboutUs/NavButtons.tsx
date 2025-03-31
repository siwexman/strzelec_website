export default function NavButtons() {
    function scrollToSection(sectionId: string) {
        const hedearHeight = document.querySelector('header')?.offsetHeight;
        const section = document.getElementById(sectionId);

        if (section?.id === 'struktura' && hedearHeight) {
            const sectionPosition =
                section?.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: sectionPosition - hedearHeight,
                behavior: 'smooth',
            });
        } else {
            section?.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className="grid grid-cols-3 py-12">
            <div className="flex">
                <button
                    className="py-4 rounded-full px-6 bg-slate-400 mx-auto font-semibold"
                    onClick={() => scrollToSection('strzelcy')}
                >
                    Strzelcy
                </button>
            </div>
            <button
                className="py-4 rounded-full px-6 bg-slate-400 mx-auto font-semibold"
                onClick={() => scrollToSection('orleta')}
            >
                Orlęta
            </button>
            <button
                className="py-4 rounded-full px-6 bg-slate-400 mx-auto font-semibold"
                onClick={() => scrollToSection('struktura')}
            >
                Struktura
            </button>
        </div>
    );
}
