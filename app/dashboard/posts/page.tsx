import Posts from '@/components/Posts/Posts';

export default function PostsPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const pageNumber = searchParams.page ?? 1;

    return (
        <div className="py-4">
            <Posts pageNumber={+pageNumber} isUser={true} />
        </div>
    );
}
