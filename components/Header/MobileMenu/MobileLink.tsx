import Link from 'next/link';
import { ReactNode } from 'react';

type LinkType = {
    link: string;
    text: string;
    icon: ReactNode;
    handleClose: () => void;
};

export default function MobileLink({
    link,
    text,
    icon,
    handleClose,
}: LinkType) {
    return (
        <li className="p-4" onClick={handleClose}>
            <Link href={link} className="flex gap-4">
                {icon} <p className="text-lg font-semibold">{text}</p>
            </Link>
        </li>
    );
}
