import Image from 'next/image';
import Link from 'next/link';

import logoPanoramic from '../../public/logo_panorama.png';
import MainNav from './NavBar/MainNav';
import UserNav from '../UI/UserNav/UserNav';

export default function Header() {
    return (
        <header className="w-full  mx-auto fixed z-10 py-4 h-48 bg-white shadow-md drop-shadow-md">
            <UserNav />
            <div className="max-w-maxWidth mx-auto flex justify-between h-full ">
                <Link href="/">
                    <Image
                        src={logoPanoramic}
                        alt="Logo XXX-lecia i panorama miasta"
                        className="h-full w-auto px-4"
                        priority
                    />
                </Link>
                <MainNav />
            </div>
        </header>
    );
}
