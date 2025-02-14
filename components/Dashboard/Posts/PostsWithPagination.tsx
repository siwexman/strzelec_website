import { PostsPageProps } from '@/types/post';

import { getPostsPagination } from '@/store/action/post/get/getPostsPagination';
import { getSessionUser } from '@/store/action/session';

import Pagination from '@/components/UI/Buttons/Pagination';
import Posts from './Posts';

export default async function PostsWithPagination({ params }: PostsPageProps) {
    const user = await getSessionUser();
    console.log(user);
    const pageSize = 5; // posts visible on page max 12
    const currentPage = parseInt(params.page || '1', 10);

    const { posts, totalPages } = await getPostsPagination(
        pageSize,
        currentPage
    );

    return (
        <>
            <Posts posts={posts} isUser={!!user} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
}
