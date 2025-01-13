import Image from 'next/image';
import Link from 'next/link';

import { PostWithImages } from '@/types/post';

export default function NewsItem({ post }: { post: PostWithImages }) {
    return (
        <Link href={''} className="p-2 w-full">
            <div className="px-4 py-2 h-full">
                <div className="border rounded-t-2xl rounded-b-lg shadow flex flex-col h-full">
                    <div className="relative min-h-60">
                        <Image
                            priority
                            className="rounded-t-2xl"
                            src={post.images[0].url}
                            alt={post.title}
                            fill
                            sizes="50vw"
                        />
                    </div>
                    <div className="py-4 px-2 text-center">
                        <h4 className="text-xl font-semibold py-2 text-center uppercase">
                            {post.title}
                        </h4>
                        <div className="w-full p-px rounded-xl linear-gradient-flag-w-r-w"></div>
                        <p className="text-balance pt-2">{post.summary}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
