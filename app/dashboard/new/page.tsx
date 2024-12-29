'use client';

import { ImageProvider } from '@/components/context/ImageContext';
import AddPostForm from '@/components/Dashboard/AddPost/AddPostForm';

export default function NewPostPage() {
    return (
        <div className="text-center">
            <h2 className="mb-8">Nowy Post</h2>
            <ImageProvider>
                <AddPostForm />
            </ImageProvider>
        </div>
    );
}
