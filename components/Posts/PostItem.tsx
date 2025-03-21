'use client';

import { PostWithImages } from '@/types/post';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { deleteItemModal } from '@/store/action/modal/deleteItemModal';
import { deletePost } from '@/store/action/post/delete/deletePost';
import { useModal } from '@/components/context/ModalContext';

import ActionButton from '../UI/Buttons/ActionButton';
import Link from 'next/link';
import DateCalendar from '../HomePage/News/DateCalendar';

export default function PostItem({
    post,
    isUser,
}: {
    post: PostWithImages;
    isUser: boolean;
}) {
    const { handleOpen } = useModal();
    const router = useRouter();

    return (
        <div className="relative border rounded hover:border-slate-700 transition-all">
            <div className="grid grid-cols-6 h-full">
                <div className="relative col-span-full h-40 md:col-span-2 md:h-full">
                    <Image
                        className="rounded-l"
                        src={post.images[0].url}
                        alt={post.title}
                        fill
                        sizes="50vw"
                    />
                </div>
                <div className="row-start-2 col-span-full md:row-start-auto md:col-span-4 px-6 py-4 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl py-2 uppercase">{post.title}</h3>
                        <p className="text-sm font-light italic md:pt-2 pb-4 text-gray-500">
                            {post.summary}
                        </p>
                    </div>
                    {isUser ? (
                        <div className="py-2 flex justify-center gap-6">
                            <ActionButton
                                content="Pokaż całą treść"
                                action="read"
                                handleAction={() =>
                                    router.push(`/aktualnosci/${post.slug}`)
                                }
                            />
                            <ActionButton
                                content="Edytuj"
                                action="edit"
                                handleAction={() =>
                                    router.push(`/dashboard/edit?id=${post.id}`)
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
                    ) : (
                        <div className="text-right py-4 px-2">
                            <Link
                                href={`aktualnosci/${post.slug}`}
                                className="py-2 px-4 text-lg font-semibold bg-slate-200 rounded-lg border border-slate-600 hover:bg-slate-600 hover:text-white transition-all"
                            >
                                Czytaj dalej
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <DateCalendar date={post.date} isHomePage />
        </div>
    );
}
