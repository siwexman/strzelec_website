import { PostWithImages } from '@/types/post';
import PostItem from './PostItem';

export default function Posts({
    posts,
    isUser,
}: {
    posts: PostWithImages[];
    isUser: boolean;
}) {
    return (
        <div className="py-4 grid grid-cols-1 gap-4 auto-rows-fr">
            {posts.map(post => (
                <PostItem key={post.id} post={post} isUser={isUser} />
            ))}
        </div>
    );
}
