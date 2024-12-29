import { getPostsWithImages } from '@/store/action/getPosts';

import LatestNewsItem from './LatestNewsItem';

export default async function LatestNews() {
    const posts = await getPostsWithImages(5);

    return (
        <div className="p-4 text-center">
            <h3 className="text-xl font-bold py-4">Ostatnie Posty</h3>
            <div className="border w-full rounded px-1 py-2 grid grid-cols-5 gap-2 items-stretch">
                {posts.map(post => (
                    <LatestNewsItem key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}
