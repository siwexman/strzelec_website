import { prisma } from '@/lib/prisma';

export async function getPostsWithImages(quantity: number) {
    const posts = await prisma.post.findMany({
        take: quantity,
        include: {
            images: true,
        },
        orderBy: {
            id: 'desc',
        },
    });

    return posts;
}
