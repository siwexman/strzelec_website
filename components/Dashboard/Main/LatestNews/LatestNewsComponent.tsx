import LatestNewsItem from './LatestNewsItem';
import { getPostsWithImage } from '@/store/action/post/getPosts';

export default async function LatestNewsComponent() {
    const posts = await getPostsWithImage(5);

    return (
        <div className="border w-full rounded px-1 py-2 grid grid-cols-5 gap-2 items-stretch">
            {posts.length === 0 && (
                <div className="text center col-span-full py-4">
                    <p>Brak postów</p>
                    <p className="py-2 font-bold text-xl">Dodaj nowy post!</p>
                </div>
            )}
            {posts.map(post => (
                <LatestNewsItem key={post.id} post={post} />
            ))}
        </div>
    );
}
