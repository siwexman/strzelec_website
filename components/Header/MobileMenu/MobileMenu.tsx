import { FileText, HandHeart, Phone, Users, X } from 'lucide-react';
import Tax from '@/components/HomePage/GiveTax/Tax';
import Link from 'next/link';

import { motion } from 'framer-motion';
import FacebookIcon from '@/components/UI/Icons/Facebook';
import YoutubeIcon from '@/components/UI/Icons/Youtube';
import MobileLink from './MobileLink';
import { overflowHidden } from '@/store/overflow/overflowHidden';

export default function MobileMenu({
    isOpen,
    handleClose,
}: {
    isOpen: boolean;
    handleClose: () => void;
}) {
    function handleCloseMenu() {
        overflowHidden('auto');
        handleClose();
    }

    return (
        <motion.div
            initial={{ x: '100%' }}
            transition={{ type: 'tween' }}
            animate={{ x: isOpen ? 0 : '100%' }}
            className="z-[99] px-4 fixed flex bottom-0 right-0 h-screen w-full sm:w-fit bg-white md:hidden"
        >
            <div className="relative py-16 w-full">
                <div className="py-2 flex justify-end">
                    <X onClick={handleCloseMenu} />
                </div>
                <div className="flex flex-col gap-4">
                    <ul className="uppercase">
                        <MobileLink
                            link="/wolontariat"
                            text="Wolontariat"
                            icon={<HandHeart />}
                            handleClose={handleCloseMenu}
                        />
                        <MobileLink
                            link="/aktualnosci"
                            text="Aktualności"
                            icon={<FileText />}
                            handleClose={handleCloseMenu}
                        />
                        <MobileLink
                            link="/o-nas"
                            text="O nas"
                            icon={<Users />}
                            handleClose={handleCloseMenu}
                        />
                        <MobileLink
                            link="/kontakt"
                            text="Kontakt"
                            icon={<Phone />}
                            handleClose={handleCloseMenu}
                        />
                    </ul>
                    <div>
                        <div className="flex gap-4 justify-center py-2">
                            <Link
                                href={
                                    'https://www.facebook.com/profile.php?id=100071100844013&locale=pl_PL'
                                }
                            >
                                <FacebookIcon />
                            </Link>
                            <Link
                                href={'https://www.youtube.com/@JS2021Rzeszow'}
                            >
                                <YoutubeIcon />
                            </Link>
                        </div>
                        <Tax handleCloseMenu={handleCloseMenu} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
