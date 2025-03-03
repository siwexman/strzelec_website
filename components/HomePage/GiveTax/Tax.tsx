import Link from 'next/link';

export default function Tax({ isMobile = false }: { isMobile?: boolean }) {
    const cssClass = isMobile ? '' : '';

    return (
        <div className="rounded-lg lg:absolute bottom-0 lg:top-0 lg:right-1/3 p-2 lg:rounded-b-lg bg-red-600 font-semibold text-white text-center">
            <Link href="/podatek">
                <p>Przekaż 1,5%</p>
            </Link>
        </div>
    );
}
