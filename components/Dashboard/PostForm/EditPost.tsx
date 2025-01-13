import { PostWithImages } from '@/types/post';
import FormWithProvider from './FormWithProvider';

export default function EditPost({ post }: { post: PostWithImages }) {
    return (
        <>
            {/* <ImagesUploaded images={post?.images} /> */}
            <FormWithProvider post={post} />
        </>
    );
}
