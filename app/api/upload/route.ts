import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { UploadedPost } from '@/types/post';
import { getSessionUser } from '@/store/action/session';

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const user = await getSessionUser();
        const post: UploadedPost = {
            title: '',
            summary: '',
            description: '',
            images: [],
        };

        if (!user) {
            return;
        }

        data.forEach((value, key) => {
            if (key !== 'images') {
                post[key as 'title' | 'summary' | 'description'] =
                    value as string;
            } else {
                if (data.getAll(key).length > 1) {
                    post.images = data.getAll(key) as File[];
                } else {
                    post.images = [value as File];
                }
            }
        });

        const response = await prisma.post.create({
            data: {
                authorId: user.id,
                title: post.title,
                summary: post.summary,
                description: post.description,
                images: {
                    create: post.images.map(image => ({
                        path: 'd', // TODO: create url to image
                    })),
                },
            },
        });

        console.log({ response });
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: 'success' });
}
