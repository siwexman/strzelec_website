import { PostWithImages } from '@/types/post';
import Image from 'next/image';
import ActionButton from './ActionButton';

export default function PostItem({ post }: { post: PostWithImages }) {
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
                />
            </div>
            <div className="col-span-3 px-6 py-2 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl py-2 uppercase">{post.title}</h3>
                    <p className="pt-2 pb-4 text-gray-500">{post.summary}</p>
                </div>
                <div className="py-2 flex justify-center gap-6">
                    <ActionButton content="Pokaż całą treść" color="blue" />
                    <ActionButton content="Edytuj" color="amber" />
                    <ActionButton content="Usuń" color="red" />
                </div>
            </div>
        </div>
    );
}
