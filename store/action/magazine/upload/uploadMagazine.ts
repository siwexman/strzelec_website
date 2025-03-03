'use server';

import { prisma } from '@/lib/prisma';
import fs from 'fs/promises';
import path from 'path';
import { convertPdfToImage } from './pdfConverter';
import { getMagazine } from '../get/getMagazine';

export async function uploadMagazine(
    magazine: Uint8Array,
    magazineFileName: string,
    issue: string
) {
    const magazinesDir = path.join(process.cwd(), 'public/uploads/magazine');
    const magazineName = issue.replace('/', '-');
    const singleMagazineDir = path.join(magazinesDir, magazineName);

    try {
        const checkMagazine = await getMagazine(issue);

        if (checkMagazine) {
            throw new Error('Taka nazwa czasopisma już istnieje!');
        }

        await fs.mkdir(singleMagazineDir, { recursive: true });

        const buffer = Buffer.from(magazine);
        const extension = '.' + magazineFileName.split('.')[1];
        const fileName = magazineName + extension;
        const filePath = path.join(singleMagazineDir, fileName);

        await fs.writeFile(filePath, buffer);

        const counter = await prisma.counter.findFirst();

        if (counter?.counter === 0 || !counter) {
            throw new Error('Nie ma żadnych kredytów! Spróbuj ponownie jutro.');
        }

        // convertion pdf (first page) -> img
        const resultConvert = await convertPdfToImage(
            filePath,
            fileName,
            singleMagazineDir
        );

        if (!resultConvert) {
            throw new Error('Wystąpił błąd podczas konwersji pdf');
        }

        await prisma.magazine.create({
            data: {
                url: `/uploads/magazine/${magazineName}/${fileName}`,
                issue: issue,
                imgUrl: `/uploads/magazine/${magazineName}/${magazineName}.png`,
            },
        });

        return { type: 'correct', message: 'Czasopismo dodane pomyślnie' };
    } catch (error) {
        return {
            type: 'error',
            message: `Dodawanie nie powiodło się!\n${error}`,
        };
    }
}
