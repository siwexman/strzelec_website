import fs from 'fs/promises';
import path from 'path';
import { prisma } from '@/lib/prisma';
import { UploadedPost } from '@/types/post';
import { Post } from '@prisma/client';

export async function uploadImages(
    post: Post,
    uploadedPost: UploadedPost,
    fileLastIndex?: number
) {
    const postDir = path.join(
        process.cwd(),
        'public/uploads/gallery',
        String(post.id)
    );

    try {
        await fs.access(postDir);
    } catch (error) {
        const nodeError = error as NodeJS.ErrnoException;
        if (nodeError.code === 'ENOENT') {
            await fs.mkdir(postDir, { recursive: true });
        }
    }

    const uploadedImages = [];
    for (const [index, file] of uploadedPost.images.entries()) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const extension = '.' + file.name.split('.')[1];
        const fileName = `${Date.now()}_${
            fileLastIndex ? index + fileLastIndex : index
        }${extension}`;
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
}
