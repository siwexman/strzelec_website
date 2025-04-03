import Link from 'next/link';

export default function Tax({
    handleCloseMenu,
}: {
    handleCloseMenu?: () => void;
}) {
    return (
        <div
            className="my-auto rounded-lg p-2 bg-red-600 font-semibold text-white text-center"
            onClick={handleCloseMenu}
        >
            <Link href="/podatek">
                <p>Przekaż 1,5%</p>
            </Link>
        </div>
    );
}
