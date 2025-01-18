'use server';

import { prisma } from '@/lib/prisma';
import fs from 'fs/promises';
import path from 'path';
import { convertPdfToImage } from './pdfConverter';
import { getMagazine } from './getMagazine';

export async function uploadMagazine(
    magazine: Uint8Array,
    magazineFileName: string,
    issue: string
) {
    const magazinesDir = path.join(process.cwd(), 'public/uploads/magazine');
    const magazineName = issue.replace('/', '-');
    const singleMagazineDir = path.join(magazinesDir, magazineName);

    const checkMagazine = await getMagazine(magazineName);

    if (checkMagazine) {
        return { type: 'error', message: 'Taki numer już istnieje' };
    }

    try {
        await fs.mkdir(singleMagazineDir, { recursive: true });

        const buffer = Buffer.from(magazine);
        const extension = '.' + magazineFileName.split('.')[1];
        const fileName = magazineName + extension;
        const filePath = path.join(singleMagazineDir, fileName);

        await fs.writeFile(filePath, buffer);

        // convertion pdf (first page) -> img
        await convertPdfToImage(filePath, fileName, singleMagazineDir);

        await prisma.magazine.create({
            data: {
                url: `/uploads/magazine/${magazineName}/${fileName}`,
                issue: issue,
                imgUrl: `/uploads/magazine/${magazineName}/${magazineName}.png`,
            },
        });

        return { type: 'correct', message: 'Czasopismo dodane pomyślnie' };
    } catch (error) {
        console.log(error);
        return { type: 'error', message: 'Dodawanie nie powiodło się :(' };
    }
}
