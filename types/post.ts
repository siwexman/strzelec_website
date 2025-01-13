import { Image, ImageFile } from './imageFile';

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
    images: Image[];
} & {
    id: number;
    title: string;
    summary: string;
    description: string;
    date: Date;
    authorId: number;
};

export interface PostsPageProps {
    params: { page: string };
}
