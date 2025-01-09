'use server';

import fs from 'fs/promises';
import path from 'path';
import { prisma } from '@/lib/prisma';

export async function deletePost(postID: number) {
    await prisma.post.delete({
        where: {
            id: postID,
        },
    });

    const folderPath = path.join(
        process.cwd(),
        'public/uploads/gallery',
        postID.toString()
    );

    fs.access(folderPath);
    await fs.rm(folderPath, { recursive: true, force: true });
}
