'use server';

import { join } from 'path';
import { writeFile } from 'fs/promises';
import { prisma } from '@/lib/prisma';

import { ImageFile } from '@/types/imageFile';
import { Post } from '@/types/post';

export async function getPosts() {}
export async function getPost() {}

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
