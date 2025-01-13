'use client';

import { PostWithImages } from '@/types/post';
import Image from 'next/image';
import ActionButton from './ActionButton';
import { useModal } from '@/components/context/ModalContext';
import { useRouter } from 'next/navigation';
import { deleteItemModal } from '@/store/action/deleteItemModal';
import { deletePost } from '@/store/action/post/delete/deletePost';

export default function PostItem({ post }: { post: PostWithImages }) {
    const { handleOpen } = useModal();
    const router = useRouter();

    return (
        <div
            className="grid grid-cols-4 border rounded hover:border-slate-700 transition-all"
            key={post.id}
        >
            <div className="relative">
                <Image
                    className="rounded-l"
                    src={post.images[0].url}
                    alt={post.title}
                    fill
                    sizes="10vw"
                />
            </div>
            <div className="col-span-3 px-6 py-2 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl py-2 uppercase">{post.title}</h3>
                    <p className="pt-2 pb-4 text-gray-500">{post.summary}</p>
                </div>
                <div className="py-2 flex justify-center gap-6">
                    <ActionButton
                        content="Pokaż całą treść"
                        action="read"
                        handleAction={() => router.push('/')} // slug to post page
                    />
                    <ActionButton
                        content="Edytuj"
                        action="edit"
                        handleAction={() =>
                            router.push(`../edit?id=${post.id}`)
                        }
                    />
                    <ActionButton
                        content="Usuń"
                        action="delete"
                        handleAction={() =>
                            deleteItemModal(
                                router,
                                post.id,
                                'post',
                                () => deletePost(post.id),
                                handleOpen
                            )
                        }
                    />
                </div>
            </div>
        </div>
    );
}
