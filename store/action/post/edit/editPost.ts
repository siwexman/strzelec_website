'use server';

import { prisma } from '@/lib/prisma';
import xss from 'xss';
import fs from 'fs/promises';

import { getEachEntry } from '../../form/getEachEntry';
import path from 'path';
import { uploadImages } from '../../image/uploadImages';

export async function editPost(formData: FormData, postId: number) {
    try {
        const uploadedPost = getEachEntry(formData);

        const updatedPost = await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                title: uploadedPost.title,
                summary: uploadedPost.summary,
                description: xss(uploadedPost.description),
            },
        });

        const pathFile = path.join(process.cwd(), 'public/uploads/gallery/99');
        const exisitingFiles = await fs.readdir(pathFile);

        console.log(exisitingFiles);

        const indexes = exisitingFiles.map(file => getValueFromFileName(file));
        const fileLastIndex = indexes[indexes.length - 1]! + 1;

        await uploadImages(updatedPost, uploadedPost, fileLastIndex);

        return { type: 'correct', message: 'Post został zaktualizowany!' };
    } catch (error) {
        return {
            type: 'error',
            message: `Wystąpił błąd podczas dodawania postu.\n${error}`,
        };
    }
}

function getValueFromFileName(fileName: string) {
    const regex = /_(.*?)\./;
    const match = fileName.match(regex);

    if (match) {
        return parseInt(match[1]);
    }
}
