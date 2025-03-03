'use client';

import { useModal } from '@/components/context/ModalContext';
import { useRouter } from 'next/navigation';

export default function RouterBtn() {
    const router = useRouter();
    const { handleClose } = useModal();

    function handleClick() {
        handleClose();

        router.push('/dashboard');
        router.refresh();
    }

    return (
        <button
            onClick={handleClick}
            className="mx-auto w-1/2 px-4 py-2 border-2 border-white text-white font-bold rounded-md hover:bg-white bg-green-600 hover:border-green-600 hover:text-green-600"
        >
            Wróć do panelu
        </button>
    );
}
