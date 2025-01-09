'use client';
import { useModal } from '../../context/ModalContext';

import UserIcon from '@/components/UI/Icons/User';

export default function LoginButton({}) {
    const { handleOpen } = useModal();

    return (
        <button onClick={() => handleOpen('login')}>
            <UserIcon />
        </button>
    );
}
