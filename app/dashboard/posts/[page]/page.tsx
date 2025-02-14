import { PostsPageProps } from '@/types/post';

import PostsWithPagination from '@/components/Dashboard/Posts/PostsWithPagination';

export default function PostsPage({ params }: PostsPageProps) {
    return <PostsWithPagination params={params} />;
}
