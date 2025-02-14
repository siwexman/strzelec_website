import { PropsWithChildren } from 'react';
import PaginationContainer from './PaginationContainer';

type Props = PropsWithChildren<{
    totalPages: number;
    currentPage: number;
}>;

export default function PostsContainer({
    children,
    currentPage,
    totalPages,
}: Props) {
    return (
        <div>
            <div>{children}</div>
            <PaginationContainer
                totalPages={totalPages}
                currentPage={currentPage}
            />
        </div>
    );
}
