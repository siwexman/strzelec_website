import PostContent from '@/components/Posts/Post/PostContent';
import { getPostBySlug } from '@/store/action/post/get/getPostBySlug';
import { Metadata } from 'next';

type Props = { params: Promise<{ postSlug: string }> };

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const slug = (await params).postSlug;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: 'Nie znaleziono aktualności' };
    }

    return {
        title: post?.title,
    };
};

export default async function Post({
    params,
}: {
    params: { postSlug: string };
}) {
    const post = await getPostBySlug(params.postSlug);

    if (!post) {
        return <p>Post not found</p>;
    }

    return <PostContent post={post} />;
}
