import Link from 'next/link';
import { getPaginationPages } from '@/store/action/post/getPaginationPage';

export default function Pagination({
    currentPage,
    totalPages,
}: {
    currentPage: number;
    totalPages: number;
}) {
    const paginationPages = getPaginationPages(currentPage, totalPages);

    return (
        <div className="py-4 flex justify-center gap-4">
            {paginationPages.map((page, index) => (
                <div key={index}>
                    {page === '...' ? (
                        <span className="text-lg tracking-widest">...</span>
                    ) : (
                        <Link
                            href={page.toString()}
                            className={`${
                                currentPage !== page
                                    ? 'border-slate-500 hover:bg-slate-300'
                                    : 'bg-slate-500 text-white border-slate-500 hover:bg-slate-400'
                            } py-2 px-4 font-semibold border-2 rounded`}
                        >
                            {page}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
}
