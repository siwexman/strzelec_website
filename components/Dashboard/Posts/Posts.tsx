import { getPostsWithImage } from '@/store/action/post/getPosts';
import PostItem from './PostItem';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function Posts({ page }: { page: string }) {
    const pageSize = 5;
    const currentPage = parseInt(page || '1', 10);

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

    return (
        <div className="py-4 grid grid-rows-5 gap-4">
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
            <div>
                {currentPage > 1 && (
                    <Link href={`/dashboard/posts/${currentPage - 1}`}>
                        Previous
                    </Link>
                )}
                <p>
                    Page {currentPage} of {totalPages}
                </p>
                {currentPage < totalPages && (
                    <Link href={`/dashboard/posts/${currentPage + 1}`}>
                        Next
                    </Link>
                )}
            </div>
        </div>
    );
}
