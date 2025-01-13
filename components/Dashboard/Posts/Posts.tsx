import { PostWithImages } from '@/types/post';
import PostItem from './PostItem';

export default function Posts({ posts }: { posts: PostWithImages[] }) {
    return (
        <div className="py-4 grid grid-cols-1 gap-4">
            {posts.map(post => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
}
