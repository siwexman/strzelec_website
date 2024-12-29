import Link from 'next/link';
import Image from 'next/image';
import { PostWithImages } from '@/types/post';

export default function LatestNewsItem({ post }: { post: PostWithImages }) {
    return (
        <Link href={''}>
            <div className="rounded-sm border h-full grid grid-rows-2">
                <div className="relative min-h-28">
                    <Image
                        priority
                        src={post.images[0].url}
                        alt="test"
                        fill
                        className="rounded-t-sm"
                        sizes="10vw"
                    />
                </div>
                <p className="py-2 text-sm my-auto">{post.title}</p>
            </div>
        </Link>
    );
}
