'use client';

import { PostWithImages } from '@/types/post';

import { ImageProvider } from '@/components/context/ImageContext';
import PostForm from '@/components/Dashboard/PostForm/PostForm';

export default function FormWithProvider({
    post,
}: {
    post?: PostWithImages | null;
}) {
    return (
        <ImageProvider>
            <PostForm
                title={post?.title}
                summary={post?.summary}
                description={post?.description}
                serverImages={post?.images}
                editId={post?.id}
            />
        </ImageProvider>
    );
}
