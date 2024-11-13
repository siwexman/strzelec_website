'use client';

import { ImageProvider } from '@/components/context/ImageContext';

import AddPost from '@/components/Dashboard/AddPost/AddPost';

export default function NewPostPage() {
    return (
        <div className="text-center">
            <h2>Nowy Post</h2>
            <ImageProvider>
                <AddPost />
            </ImageProvider>
        </div>
    );
}
