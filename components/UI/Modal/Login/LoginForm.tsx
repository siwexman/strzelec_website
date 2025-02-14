import { useRouter } from 'next/navigation';
import { useModal } from '@/components/context/ModalContext';
import { FormEvent } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    const router = useRouter();
    const { handleClose } = useModal();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: false,
        });

        console.log({ response });

        if (!response?.error) {
            handleClose();

            router.push('/dashboard');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="py-2">
            <div className="flex flex-col p-2 gap-2">
                <label htmlFor="username">Login:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="border-2 rounded p-1"
                />
            </div>
            <div className="flex flex-col p-2 gap-2">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-2 rounded p-1"
                />
            </div>
            <div className="w-full flex justify-end px-2 py-2">
                <button
                    type="submit"
                    className="bg-green-800 rounded-md p-2 text-white"
                >
                    Zaloguj
                </button>
            </div>
        </form>
    );
}
