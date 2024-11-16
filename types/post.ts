import { ImageFile } from './imageFile';

export type Post = {
    title: string;
    summary: string;
    description: string;
    images: ImageFile[];
};
