import DeleteItem from '@/components/UI/Buttons/DeleteItem';
import { prisma } from '@/lib/prisma';

import Image from 'next/image';
import Link from 'next/link';

export default async function MagazinesPage() {
    // TODO: new file with get
    const magazines = await prisma.magazine.findMany();

    if (!magazines) {
        return;
    }

    return (
        <div className="py-4">
            <h2 className="py-4 text-center">
                Czasopisma &apos;Strzelec&apos;
            </h2>
            <div className="py-4 grid grid-cols-4 gap-8">
                {magazines.map(magazine => (
                    <div
                        className="m-2 text-center border rounded relative"
                        key={magazine.id}
                    >
                        {/* TODO: finish this */}
                        <DeleteItem />
                        <Link href={magazine.url} target="_blank">
                            <div className="relative min-h-60">
                                <Image
                                    className="rounded"
                                    src={magazine.imgUrl}
                                    alt={magazine.issue}
                                    fill
                                />
                            </div>
                            <p className="py-1">{magazine.issue}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
