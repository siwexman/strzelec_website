'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    total: number;
    initialPage?: number;
    page?: number;
    onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    total,
    initialPage = 1,
    page,
    onChange,
}) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        if (page !== undefined) {
            setCurrentPage(page);
        }
    }, [page]);

    const maxVisiblePages = 5;
    const pageNumbers = Array.from({ length: total }, (_, i) => i + 1);

    const getDisplayedPages = () => {
        if (total <= maxVisiblePages) return pageNumbers;
        const middleIndex = Math.floor(maxVisiblePages / 2);
        if (currentPage <= middleIndex)
            return [...pageNumbers.slice(0, maxVisiblePages), '...'];
        if (currentPage >= total - middleIndex)
            return ['...', ...pageNumbers.slice(-maxVisiblePages)];
        return [
            '...',
            ...pageNumbers.slice(
                currentPage - middleIndex,
                currentPage + middleIndex
            ),
            '...',
        ];
    };

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > total) return;
        setCurrentPage(newPage);
        onChange(newPage);
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-4">
            <button
                className={`p-2 rounded-lg transition ${
                    currentPage === 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-200'
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <ChevronLeft size={18} />
            </button>

            {getDisplayedPages().map((page, index) => (
                <button
                    key={index}
                    className={`px-3 py-1 rounded-lg transition ${
                        page === '...'
                            ? 'cursor-default'
                            : currentPage === page
                            ? 'bg-black text-white'
                            : 'hover:bg-gray-200'
                    }`}
                    onClick={() =>
                        typeof page === 'number' && handlePageChange(page)
                    }
                    disabled={page === '...'}
                >
                    {page}
                </button>
            ))}

            <button
                className={`p-2 rounded-lg transition ${
                    currentPage === total
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-200'
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === total}
            >
                <ChevronRight size={18} />
            </button>
        </div>
    );
};

export default Pagination;
