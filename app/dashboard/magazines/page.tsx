import Magazines from '@/components/Dashboard/Magazines/Magazines';

export default async function MagazinesPage() {
    return (
        <div className="py-4">
            <Magazines isUser={true} />
        </div>
    );
}
