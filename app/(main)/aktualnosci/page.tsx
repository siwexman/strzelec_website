import Posts from '@/components/Posts/Posts';

interface Props {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function PostsPage({ searchParams }: Props) {
    const pageNumber = searchParams.page ?? 1;

    return (
        <>
            <h2 className="text-center py-4">Wszystkie aktualności</h2>
            <div className="py-4">
                <Posts pageNumber={+pageNumber} isUser={false} />
            </div>
        </>
    );
}
