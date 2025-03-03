'use client';

import { Magazine } from '@prisma/client';

import Image from 'next/image';
import Link from 'next/link';
import DeleteItem from '@/components/UI/Buttons/DeleteItem';
import { useModal } from '../../context/ModalContext';
import { deleteItemModal } from '@/store/action/modal/deleteItemModal';
import { useRouter } from 'next/navigation';
import { deleteMagazine } from '@/store/action/magazine/delete/deleteMagazine';

export default function MagazineItem({
    magazine,
    isUser,
}: {
    magazine: Magazine;
    isUser: boolean;
}) {
    const { handleOpen } = useModal();
    const router = useRouter();

    return (
        <div
            className="m-2 text-center border rounded relative"
            key={magazine.id}
        >
            {isUser && (
                <DeleteItem
                    handleClick={() =>
                        deleteItemModal(
                            router,
                            magazine.id,
                            'czasopismo',
                            () => deleteMagazine(magazine.id),
                            handleOpen
                        )
                    }
                />
            )}
            <Link href={magazine.url} target="_blank">
                <div className="relative min-h-60">
                    <Image
                        priority
                        className="rounded"
                        src={magazine.imgUrl}
                        alt={magazine.issue}
                        fill
                        sizes="50vw"
                    />
                </div>
                <p className="py-1">{magazine.issue}</p>
            </Link>
        </div>
    );
}
