import Link from 'next/link';
import { ReactNode } from 'react';

export default function NavItem({
    children,
    link,
}: {
    children: ReactNode;
    link: string;
}) {
    return (
        <div className="my-auto text-black text-nowrap">
            <Link href={link} className="p-4">
                {children}
            </Link>
        </div>
    );
}
