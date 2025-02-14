'use server';

import xss from 'xss';
import slugify from 'slugify';
import { prisma } from '@/lib/prisma';

import { getSessionUser } from '@/store/action/session';
import { getEachEntry } from '../../form/getEachEntry';
import { uploadImages } from '../../image/uploadImages';

export default async function uploadPost(
    formData: FormData
): Promise<{ type: string; message: string } | undefined> {
    const user = await getSessionUser();

    try {
        if (!user) {
            return;
        }

        const uploadedPost = getEachEntry(formData);

        // create post
        const post = await prisma.post.create({
            data: {
                title: uploadedPost.title,
                summary: uploadedPost.summary,
                description: xss(uploadedPost.description),
                authorId: user.id,
                date: new Date(),
                slug: slugify(uploadedPost.title, { lower: true }),
            },
        });

        await uploadImages(post, uploadedPost);

        return { type: 'correct', message: 'Post został dodany!' };
    } catch (error) {
        return {
            type: 'error',
            message: `Wystąpił błąd podczas dodawania postu.\n${error}`,
        };
    }
}
