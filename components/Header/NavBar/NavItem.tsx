import Link from 'next/link';
import { ReactNode } from 'react';

export default function NavItem(props: { children: ReactNode; link: string }) {
    return (
        <div className="my-auto text-black text-nowrap">
            <Link href={props.link} className="p-4">
                {props.children}
            </Link>
        </div>
    );
}
