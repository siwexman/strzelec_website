'use client';

import Image from 'next/image';
import { PostWithImages } from '@/types/post';
import DeleteItem from '../DeleteItem';
import { deletePost } from '@/store/action/post/deletePost';
import { useModal } from '@/components/context/ModalContext';
import { useRouter } from 'next/navigation';

export default function LatestNewsItem({ post }: { post: PostWithImages }) {
    const { handleOpen } = useModal();
    const router = useRouter();

    function handleDeletePost() {
        async function handleDeletePost() {
            await deletePost(post.id);
            router.refresh();
        }

        handleOpen('confirm', '', handleDeletePost);
    }

    return (
        <div className="relative">
            <DeleteItem handleClick={handleDeletePost} />
            <div className="rounded-sm border h-full grid grid-rows-2">
                <div className="relative min-h-28">
                    <Image
                        priority
                        src={post.images[0].url}
                        alt={post.title}
                        fill
                        className="rounded-t-sm"
                        sizes="10vw"
                    />
                </div>
                <p className="py-2 px-1 text-sm my-auto uppercase">
                    {post.title}
                </p>
            </div>
        </div>
    );
}
