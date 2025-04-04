import AddPost from '@/components/Dashboard/PostForm/FormWithProvider';

export default function NewPostPage() {
    return (
        <div className="text-center">
            <h2 className="mb-8">Nowy Post</h2>
            <AddPost />
        </div>
    );
}
