'use client';

import Image from 'next/image';
import { PostWithImages } from '@/types/post';
import DeleteItem from '../../../UI/Buttons/DeleteItem';
import { useModal } from '@/components/context/ModalContext';
import { useRouter } from 'next/navigation';
import { deleteItemModal } from '@/store/action/modal/deleteItemModal';
import { deletePost } from '@/store/action/post/delete/deletePost';

export default function LatestNewsItem({ post }: { post: PostWithImages }) {
    const { handleOpen } = useModal();
    const router = useRouter();

    return (
        <div className="relative w-full">
            <DeleteItem
                handleClick={() =>
                    deleteItemModal(
                        router,
                        post.id,
                        'post',
                        () => deletePost(post.id),
                        handleOpen
                    )
                }
            />
            <div className="rounded-sm border h-full grid grid-rows-2 w-full">
                <div className="relative min-h-28 min-w-36">
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
