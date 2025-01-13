'use server';

import fs from 'fs/promises';
import path from 'path';
import { prisma } from '@/lib/prisma';

export async function deleteImage(imageId: number) {
    const img = await prisma.image.findFirst({
        where: {
            id: imageId,
        },
    });

    if (!img) {
        return { message: "Can't find image" };
    }

    const imgPath = path.join(process.cwd(), 'public', img?.url);

    try {
        await fs.access(imgPath);
    } catch (error) {
        return { message: `Error :${error}` };
    }

    await fs.rm(imgPath);

    await prisma.image.delete({
        where: {
            id: imageId,
        },
    });
}
