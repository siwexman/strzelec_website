'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { PostWithImages } from '@/types/post';
import DateCalendar from './DateCalendar';

export default function NewsItem({ post }: { post: PostWithImages }) {
    const slug = `/aktualnosci/${post.slug}`;

    return (
        <div className="h-full relative p-2">
            <Link href={slug}>
                <motion.div
                    initial={{
                        y: 50,
                        opacity: 0,
                        scale: 0.95,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{ margin: '-150px', once: true }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 max-w-[400px] relative mx-auto h-full"
                >
                    <div className="border rounded-t-2xl rounded-b-lg shadow flex flex-col h-full">
                        <div className="relative min-h-48">
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
                    <DateCalendar date={post.date} />
                </motion.div>
            </Link>
        </div>
    );
}
