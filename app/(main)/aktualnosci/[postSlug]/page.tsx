import { getPostBySlug } from '@/store/action/post/get/getPostBySlug';

export default async function Post({ params }) {
    const post = await getPostBySlug(params.postSlug);

    return <div>{post.title}</div>;
}
