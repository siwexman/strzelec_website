import Magazines from '@/components/Dashboard/Magazines/Magazines';

export default async function MagazinesPage() {
    return (
        <div className="py-4">
            <h2 className="py-4 text-center">
                Czasopisma &apos;Strzelec&apos;
            </h2>
            <Magazines />
        </div>
    );
}
