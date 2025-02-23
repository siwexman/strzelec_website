import { prisma } from '@/lib/prisma';

export async function getPostsWithMainImage(quantity: number) {
    const posts = await prisma.post.findMany({
        take: quantity,
        include: {
            images: {
                take: 1,
            },
        },
        orderBy: {
            id: 'desc',
        },
    });

    return posts;
}

export async function getPostsPagination(
    PAGE_SIZE: number,
    pageNumber: number
) {
    const postsPromise = prisma.post.findMany({
        orderBy: {
            id: 'desc',
        },
        include: {
            images: {
                take: 1,
            },
        },
        skip: (pageNumber - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
    });
    const totalPostsPromise = prisma.post.count();

    const [posts, totalPosts] = await Promise.all([
        postsPromise,
        totalPostsPromise,
    ]);

    const totalPages = Math.ceil(totalPosts / PAGE_SIZE);

    return {
        posts,
        totalPages,
    };
}
