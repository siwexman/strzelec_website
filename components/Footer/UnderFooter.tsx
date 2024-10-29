'use client';

import Link from 'next/link';

import UserIcon from '../Icons/User';
import FacebookIcon from '../Icons/Facebook';
import YoutubeIcon from '../Icons/Youtube';
import { useModal } from '../context/ModalContext';

export default function UnderFooter() {
    const { handleOpen } = useModal();

    return (
        <div className="flex justify-between px-4 py-2">
            <div className="flex gap-1">
                <button onClick={() => handleOpen('login')}>
                    <UserIcon />
                </button>
                <p className="text-sm my-auto">
                    Zrealizował{' '}
                    <a href="" className="font-semibold">
                        Karol Strączek
                    </a>
                </p>
            </div>
            <div className="flex gap-4 px-2">
                <Link href={''}>
                    <FacebookIcon />
                </Link>
                <Link href={''}>
                    <YoutubeIcon />
                </Link>
            </div>
        </div>
    );
}
