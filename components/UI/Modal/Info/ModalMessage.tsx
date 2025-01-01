import { useModal } from '@/components/context/ModalContext';
import { useRouter } from 'next/navigation';

const classes = {
    correct: {
        p: 'text-green-600',
        button: 'bg-green-600 hover:border-green-600 hover:text-green-600',
    },
    error: {
        p: 'text-red-600',
        button: 'bg-red-600 hover:border-red-600 hover:text-red-600',
    },
};

type Type = keyof typeof classes;

export default function ModalMessage({
    type,
    content,
}: {
    type: Type;
    content: string;
}) {
    const router = useRouter();
    const { handleClose } = useModal();

    function handleClick() {
        handleClose();

        router.push('/dashboard');
    }

    return (
        <div className="flex flex-col">
            <div className="text-center">
                <p
                    className={`uppercase font-semibold text-xl py-8 px-4 ${classes[type].p}`}
                >
                    {content}
                </p>
            </div>
            <button
                onClick={handleClick}
                className={`mx-auto w-1/2 px-4 py-2 border-2 border-white text-white font-bold rounded-md hover:bg-white ${classes[type].button}`}
            >
                Wróć do panelu
            </button>
        </div>
    );
}
