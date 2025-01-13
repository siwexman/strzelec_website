import { PostsPageProps } from '@/types/post';
import Pagination from '@/components/UI/Buttons/Pagination';
import Posts from './Posts';
import { getPostsPagination } from '@/store/action/post/get/getPostsPagination';

export default async function PostsWithPagination({ params }: PostsPageProps) {
    const pageSize = 5; // posts visible on page max 12
    const currentPage = parseInt(params.page || '1', 10);

    const { posts, totalPages } = await getPostsPagination(
        pageSize,
        currentPage
    );

    return (
        <>
            <Posts posts={posts} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    );
}
