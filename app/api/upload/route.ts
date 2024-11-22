import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { UploadedPost } from '@/types/post';
import { getSessionUser } from '@/store/action/session';
import path from 'path';
import fs from 'fs/promises';

export async function POST(request: NextRequest) {
    try {
        const data = await request.formData();
        const user = await getSessionUser();
        const uploadedPost: UploadedPost = {
            title: '',
            summary: '',
            description: '',
            images: [],
        };

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        data.forEach((value, key) => {
            if (key !== 'images') {
                uploadedPost[key as 'title' | 'summary' | 'description'] =
                    value as string;
            } else {
                if (data.getAll(key).length > 1) {
                    uploadedPost.images = data.getAll(key) as File[];
                } else {
                    uploadedPost.images = [value as File];
                }
            }
        });

        // create post
        const post = await prisma.post.create({
            data: {
                authorId: user.id,
                title: uploadedPost.title,
                summary: uploadedPost.summary,
                description: uploadedPost.description,
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
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: 'success' });
}

export async function GET(request: NextRequest) {
    try {
        const posts = await prisma.post.findMany();

        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fertch posts' },
            { status: 500 }
        );
    }
}
