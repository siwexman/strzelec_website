import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className="max-w-maxWidthSm mx-auto px-4 pt-8 pb-4 w-full grid grid-cols-6 grid-rows-3 gap-4">
            <div className="bg-slate-600 col-span-5 row-span-3 p-4">
                Google Analitics
            </div>
            <Link href={'/dashboard/new'} className="bg-red-600 p-2">
                Dodaj nowy post
            </Link>
            <div className="bg-red-600 p-2">Edytuj post</div>
            <div className="bg-red-600 p-2">Usuń post</div>
        </div>
    );
}
