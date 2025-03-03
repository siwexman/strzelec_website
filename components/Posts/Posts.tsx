import { getPostsPagination } from '@/store/action/post/get/getPosts';

import PostItem from '@/components/Posts/PostItem';
import PostsContainer from '@/components/Posts/PostsContainer';

const PAGE_SIZE = 5;

export default async function Posts({
    pageNumber,
    isUser = false,
}: {
    pageNumber: number;
    isUser: boolean;
}) {
    const { posts, totalPages } = await getPostsPagination(
        PAGE_SIZE,
        pageNumber
    );

    return (
        <PostsContainer totalPages={totalPages} currentPage={pageNumber}>
            <div className="px-2 py-4 grid grid-cols-1 gap-6 auto-rows-fr md:px-0">
                {posts.map(post => (
                    <PostItem key={post.id} post={post} isUser={isUser} />
                ))}
            </div>
        </PostsContainer>
    );
}
