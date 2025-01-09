import Pagination from '@/components/UI/Buttons/Pagination';
import PostItem from '@/components/Dashboard/Posts/PostItem';
import { prisma } from '@/lib/prisma';

interface PostsPageProps {
    params: { page: string };
}

export default async function Posts({ params }: PostsPageProps) {
    const pageSize = 5;
    const currentPage = parseInt(params.page || '1', 10);

    const posts = await prisma.post.findMany({
        skip: (currentPage - 1) * pageSize,
        take: pageSize,
        orderBy: {
            id: 'desc',
        },
        include: {
            images: {
                take: 1,
            },
        },
    });

    const totalPosts = await prisma.post.count();
    const totalPages = Math.ceil(totalPosts / pageSize);
    const lastPosts = totalPosts % pageSize;
    const gridClass = `grid-rows-${currentPage === totalPages && lastPosts}`;

    return (
        <div>
            <div
                className={`py-4 grid gap-4 ${
                    currentPage !== totalPages ? 'grid-rows-5' : gridClass
                }`}
            >
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
}
