import { PostWithImages } from '@/types/post';
import LightBoxImage from './LightBox/LightBoxImage';

export default function PostContent({ post }: { post: PostWithImages }) {
    return (
        <div className="py-4">
            <div className="text-center py-8">
                <h2>{post.title}</h2>
                <p className="text-right text-gray-800">
                    {post.date.toLocaleDateString()}
                </p>
            </div>
            <div
                className="px-4 py-8"
                dangerouslySetInnerHTML={{ __html: post.description }}
            ></div>
            <LightBoxImage images={post.images} />
        </div>
    );
}
