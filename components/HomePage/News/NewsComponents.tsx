import NewsItem from './NewsItem';

import { getPostsWithImages } from '@/store/action/getPosts';

export default async function NewsComponents() {
    const posts = await getPostsWithImages(3);

    return (
        <div className="flex justify-center gap-4 py-4 items-stretch">
            {posts.map(post => (
                <NewsItem key={post.id} post={post} />
            ))}
        </div>
    );
}
