import Image from 'next/image';
import Link from 'next/link';

import logoPanoramic from '../public/Logo XXX lecia PROJ 3..png';
import MainNav from './MainNav';

export default function Header() {
    return (
        <header className="w-full flex justify-between fixed px-6 py-4 h-48 bg-white">
            <Link href={''}>
                <Image
                    src={logoPanoramic}
                    alt="Logo i panorama miasta"
                    className="h-full w-auto"
                />
            </Link>
            <MainNav />
        </header>
    );
}
