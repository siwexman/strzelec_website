'use client';

import { useRouter } from 'next/navigation';
import { Pagination } from '@heroui/pagination';

interface Props {
    totalPages: number;
    currentPage: number;
    route?: string;
}

export default function PaginationContainer({
    totalPages,
    currentPage,
    route = '',
}: Props) {
    const router = useRouter();

    // if (totalPages === 1) {
    //     return null;
    // }

    return (
        <Pagination
            classNames={{
                wrapper: 'py-6',
                item: 'mx-auto',
            }}
            total={totalPages}
            initialPage={0}
            page={currentPage}
            onChange={page => router.push(`${route}?page=${page}`)}
        />
    );
}
