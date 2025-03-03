import Image from 'next/image';
import Link from 'next/link';

import logoPanoramic from '@/assets/logo_panorama.png';
import MainNav from './NavBar/MainNav';
import UserNav from '../Dashboard/UserNav/UserNav';
import { Menu } from 'lucide-react';
import { overflowHidden } from '@/store/overflow/overflowHidden';

export default function Header({ handleOpen }: { handleOpen: () => void }) {
    function handleOpenMenu() {
        overflowHidden('hidden');
        handleOpen();
    }

    return (
        <header>
            <div className="w-full mx-auto fixed z-50 py-4 h-24 bg-white shadow-md drop-shadow-md md:h-40">
                {/* <UserNav /> */}
                <div className="max-w-maxWidth mx-auto flex justify-between h-full ">
                    <Link href="/">
                        <Image
                            priority
                            src={logoPanoramic}
                            alt="Logo XXX-lecia i panorama miasta"
                            className="h-full w-auto px-4"
                        />
                    </Link>
                    <MainNav />
                    <div className="px-4 py-2 flex md:hidden">
                        <Menu className="my-auto" onClick={handleOpenMenu} />
                    </div>
                </div>
            </div>
            <div className="h-24 md:h-40"></div>
        </header>
    );
}
