'use client';

export default function NavButton({
    sectionName,
    sectionId,
}: {
    sectionName: string;
    sectionId: string;
}) {
    function scrollToSection(sectionId: string) {
        const hedearHeight = document.querySelector('header')?.offsetHeight;
        const section = document.getElementById(sectionId);

        if (section && hedearHeight) {
            const sectionPosition =
                section?.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: sectionPosition - hedearHeight,
                behavior: 'smooth',
            });
        }
    }

    return (
        <button
            className="py-2 px-4 md:py-4 rounded-full md:px-6 bg-slate-400 mx-auto font-semibold"
            onClick={() => scrollToSection(sectionId)}
        >
            {sectionName}
        </button>
    );
}
