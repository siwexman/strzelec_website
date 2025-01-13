'use server';

import { prisma } from '@/lib/prisma';

export async function getPostWithImages(postID: number) {
    const post = await prisma.post.findFirst({
        where: {
            id: postID,
        },
        include: {
            images: true,
        },
    });

    return post;
}
