'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import NewsItem from './NewsItem';

import { PostWithImages } from '@/types/post';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function NewsSwiper({ posts }: { posts: PostWithImages[] }) {
    return (
        <Swiper
            style={{ margin: '1.5rem 0', padding: '1rem' }}
            autoHeight
            height={1000}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
        >
            {posts.map(post => (
                <SwiperSlide key={post.id} style={{ height: '100%' }}>
                    <NewsItem post={post} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
