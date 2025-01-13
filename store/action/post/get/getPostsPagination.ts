import { prisma } from '@/lib/prisma';

export async function getPostsPagination(
    pageSize: number,
    currentPage: number
) {
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

    return { posts, totalPages, lastPosts };
}
