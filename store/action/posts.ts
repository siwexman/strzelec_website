'use server';

import { prisma } from '@/lib/prisma';
import { ImageFile } from '@/types/imageFile';
import { Post } from '@/types/post';
import { promises as fs } from 'fs';

export async function getPosts() {}
export async function getPost(id) {}

export async function savePost(userPost: Post, authorId: number) {
    const post = await prisma.post.create({
        data: {
            title: userPost.title,
            summary: userPost.summary,
            description: userPost.description,
            authorId: authorId,
        },
    });
    console.log(post);
}

export async function saveImages(images: ImageFile[], postId: number) {
    // const files: File[] = [];

    const file = await images[0].base.arrayBuffer();

    await fs.writeFile(
        `${process.cwd()}/public/uploads/${postId}`,
        Buffer.from(file)
    );
}
