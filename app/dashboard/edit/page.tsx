import Link from 'next/link';

import { getPostWithImages } from '@/store/action/post/get/getPost';

import EditPost from '@/components/Dashboard/PostForm/EditPost';

export default async function EditPostPage({
    searchParams,
}: {
    searchParams: { id: string };
}) {
    const postID = parseInt(searchParams.id);

    if (!postID) {
        return (
            <div className="py-8 text-center">
                <p className="text-red-500 font-bold text-4xl py-8">
                    Nie znaleziono ID!
                </p>
                <Link
                    href={'./'}
                    className="p-4 bg-slate-200 rounded border-2 border-slate-500 hover:bg-slate-300 transition-all"
                >
                    Wróć do Panelu
                </Link>
            </div>
        );
    }

    const post = await getPostWithImages(postID);

    if (!post) {
        return <p>Nie znaleziono postu!</p>;
    }

    return (
        <div className="text-center">
            <h2 className="text-center mb-8">
                Edycja aktualności o id: {postID}
            </h2>
            <EditPost post={post} />
        </div>
    );
}
