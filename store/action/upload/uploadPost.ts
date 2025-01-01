'use server';

import { prisma } from '@/lib/prisma';
import { UploadedPost } from '@/types/post';
import { getSessionUser } from '@/store/action/session';
import path from 'path';
import fs from 'fs/promises';

export default async function uploadPost(
    formData: FormData
): Promise<{ type: string; message: string } | undefined> {
    const user = await getSessionUser();

    try {
        const uploadedPost: UploadedPost = {
            title: '',
            summary: '',
            description: '',
            images: [],
        };

        if (!user) {
            return;
        }

        formData.forEach((value, key) => {
            if (key !== 'images') {
                uploadedPost[key as 'title' | 'summary' | 'description'] =
                    value as string;
            } else {
                if (formData.getAll(key).length > 1) {
                    uploadedPost.images = formData.getAll(key) as File[];
                } else {
                    uploadedPost.images = [value as File];
                }
            }
        });

        // create post
        const post = await prisma.post.create({
            data: {
                title: uploadedPost.title,
                summary: uploadedPost.summary,
                description: uploadedPost.description,
                authorId: user.id,
                date: new Date(),
            },
        });

        const postDir = path.join(
            process.cwd(),
            'public/uploads/gallery',
            String(post.id)
        );
        await fs.mkdir(postDir, { recursive: true });

        const uploadedImages = [];
        for (const [index, file] of uploadedPost.images.entries()) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const extension = '.' + file.name.split('.')[1];
            const fileName = `${Date.now()}_${index}${extension}`;
            const filePath = path.join(postDir, fileName);

            await fs.writeFile(filePath, buffer);

            uploadedImages.push({
                postId: post.id,
                url: `/uploads/gallery/${post.id}/${fileName}`,
            });
        }

        if (uploadedImages.length > 0) {
            await prisma.image.createMany({
                data: uploadedImages,
            });
        }

        console.log({ post, images: uploadedImages });

        return { type: 'correct', message: 'Post został dodany!' };
    } catch (error) {
        console.log(error);

        return {
            type: 'error',
            message: `Wystąpił błąd podczas dodawania postu.\n${error}`,
        };
    }
}
