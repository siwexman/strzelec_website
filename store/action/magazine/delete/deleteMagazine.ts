'use server';

import { prisma } from '@/lib/prisma';
import path from 'path';
import fs from 'fs/promises';

export async function deleteMagazine(id: number) {
    const magazine = await prisma.magazine.findUnique({
        where: {
            id: id,
        },
    });

    if (!magazine) {
        return;
    }

    const magazinePath = path.join(
        process.cwd(),
        'public/uploads/magazine',
        magazine.issue.replace('/', '-')
    );

    try {
        console.log(magazinePath);
        fs.rm(magazinePath, { recursive: true });

        await prisma.magazine.delete({
            where: {
                id: id,
            },
        });
    } catch (error) {
        return { message: `Can't find path ${error}` };
    }
}
