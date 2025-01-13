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
