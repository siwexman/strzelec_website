import Link from 'next/link';

import LatestNews from '@/components/Dashboard/Main/LatestNews/LatestNews';

export default async function Dashboard() {
    return (
        <div className="max-w-maxWidthSm mx-auto">
            <div className="px-4 pt-8 pb-4 w-full grid grid-cols-6 grid-rows-3 gap-4">
                <div className="bg-slate-600 col-span-5 row-span-3 p-4">
                    Google Analitics
                </div>
                <Link href={'/dashboard/new'} className="bg-red-600 p-2">
                    Dodaj nowy post
                </Link>
                <Link href={''} className="bg-red-600 p-2">
                    Edytuj post
                </Link>
                <Link href={''} className="bg-red-600 p-2">
                    Usuń post
                </Link>
            </div>
            <LatestNews />
        </div>
    );
}
