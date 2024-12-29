import { ImageFile } from './imageFile';

export type Post = {
    title: string;
    summary: string;
    description: string;
    images: ImageFile[];
};

export type UploadedPost = {
    title: string;
    summary: string;
    description: string;
    images: File[];
};

export type PostWithImages = {
    images: {
        id: number;
        url: string;
        postId: number;
    }[];
} & {
    summary: string;
    title: string;
    id: number;
    date: Date;
    description: string;
    authorId: number;
};
