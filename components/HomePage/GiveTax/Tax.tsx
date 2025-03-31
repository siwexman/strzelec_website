import Link from 'next/link';

export default function Tax({
    handleCloseMenu,
}: {
    handleCloseMenu?: () => void;
}) {
    return (
        <div className="my-auto rounded-lg p-2 bg-red-600 font-semibold text-white text-center">
            <Link href="/podatek" onClick={handleCloseMenu}>
                <p>Przekaż 1,5%</p>
            </Link>
        </div>
    );
}
