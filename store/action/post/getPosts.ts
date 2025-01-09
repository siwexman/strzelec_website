import { prisma } from '@/lib/prisma';

export async function getPostsWithImage(quantity: number) {
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
