import Link from 'next/link';

export default function Pagination({
    currentPage,
    totalPages,
}: {
    currentPage: number;
    totalPages: number;
}) {
    function getPaginationPages(current: number, total: number) {
        const pagination = [];

        pagination.push(1);

        if (current > 2) {
            pagination.push(current - 1);
        }

        if (current !== 1 || current !== total) {
            pagination.push(current);
        }

        if (current < total - 1) {
            pagination.push(current + 1);
        }

        if (total > 1) {
            pagination.push(total);
        }

        const sortedPagination = [...new Set(pagination)];

        // return [...new Set(pagination)].sort((a, b) => a - b);
        const result: (string | number)[] = [];
        sortedPagination.forEach((page, index, array) => {
            if (index > 0 && page - array[index - 1] > 1) {
                result.push('...');
            }
            result.push(page);
        });
        console.log(result);
        return result;
    }

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
