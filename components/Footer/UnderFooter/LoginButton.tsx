'use client';

import { useModal } from '../../context/ModalContext';

import UserIcon from '@/components/UI/Icons/User';
import { useRouter } from 'next/navigation';

type User =
    | {
          id: number;
          name: string;
          role: string;
      }
    | undefined;

export default function LoginButton({ user }: { user: User }) {
    const { handleOpen } = useModal();
    const router = useRouter();

    function handleAuth() {
        if (user) {
            router.push('/dashboard');
        } else {
            handleOpen('login');
        }
    }

    return (
        <button onClick={handleAuth}>
            <UserIcon />
        </button>
    );
}
