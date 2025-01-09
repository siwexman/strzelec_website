'use client';

import { useModal } from '@/components/context/ModalContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DelayBtn() {
    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();
    const { handleClose } = useModal();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDisabled(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    function handleClick() {
        handleClose();

        router.push('/dashboard');
        router.refresh();
    }

    return (
        <button
            disabled={isDisabled}
            onClick={handleClick}
            className={`mx-auto w-1/2 px-4 py-2 border-2 border-white text-white font-bold rounded-md ${
                isDisabled
                    ? 'bg-gray-200 text-gray-300'
                    : 'hover:bg-white bg-green-600 hover:border-green-600 hover:text-green-600'
            }`}
        >
            Wróć do panelu
        </button>
    );
}
