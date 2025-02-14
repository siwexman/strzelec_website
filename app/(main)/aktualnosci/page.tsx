import PostItem from '@/components/Dashboard/Posts/PostItem';
import PostsContainer from '@/components/Posts/PostsContainer';
import { prisma } from '@/lib/prisma';

interface Props {
    searchParams: { [key: string]: string | string[] | undefined };
}

const PAGE_SIZE = 5;

export default async function Posts({ searchParams }: Props) {
    const pageNum = searchParams.page ?? 1;

    const postsPromise = prisma.post.findMany({
        orderBy: {
            id: 'desc',
        },
        include: {
            images: {
                take: 1,
            },
        },
        skip: (+pageNum - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
    });
    const totalPostsPromise = prisma.post.count();

    const [posts, totalPosts] = await Promise.all([
        postsPromise,
        totalPostsPromise,
    ]);

    const totalPages = Math.ceil(totalPosts / PAGE_SIZE);

    return (
        <>
            {/* TODO: zaktualizowac PostItem i oczyscic troche wszystko */}
            <h2 className="text-center py-4 mb-4">Wszystkie aktualności</h2>
            <PostsContainer totalPages={totalPages} currentPage={+pageNum}>
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </PostsContainer>
        </>
    );
}
