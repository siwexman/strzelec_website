import { getPostsWithMainImage } from '@/store/action/post/get/getPosts';
import NewsSwiper from './NewsSwiper';

export default async function NewsComponents() {
    const posts = await getPostsWithMainImage(5);

    return <NewsSwiper posts={posts} />;
}
