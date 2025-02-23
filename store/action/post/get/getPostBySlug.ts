import { prisma } from '@/lib/prisma';

export async function getPostBySlug(slug: string) {
    const post = await prisma.post.findFirst({
        where: {
            slug: slug,
        },
        include: {
            images: true,
        },
    });

    return post;
}
