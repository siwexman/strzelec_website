import { UploadedPost } from '@/types/post';

export function getEachEntry(formData: FormData) {
    const uploadedPost: UploadedPost = {
        title: '',
        summary: '',
        description: '',
        images: [],
    };
    
    formData.forEach((value, key) => {
        if (key !== 'images') {
            uploadedPost[key as 'title' | 'summary' | 'description'] =
                value as string;
        } else {
            if (formData.getAll(key).length > 1) {
                uploadedPost.images = formData.getAll(key) as File[];
            } else {
                uploadedPost.images = [value as File];
            }
        }
    });

    return uploadedPost;
}
