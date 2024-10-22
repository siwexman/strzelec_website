import Image from 'next/image';

import logoZS from '../../public/LogoZSStrzelec.png';
import InfoButtons from './InfoButtons/InfoButtons';
import UserIcon from '../Icons/User';

export default function Footer() {
    return (
        <footer className="max-w-maxWidth mx-auto relative z-20 bg-white">
            <div className="w-full flex justify-between px-4 h-28">
                <div>
                    <Image
                        src={logoZS}
                        alt="Logo ZS Strzelec"
                        className="w-full h-full"
                    />
                </div>
                <InfoButtons />
            </div>
            <div className="w-full bg-black h-px my-4 rounded-lg linera-gradient-black"></div>
            <div className="flex justify-between px-4 py-2">
                <div className="flex gap-1">
                    <UserIcon />
                    <p className="text-sm my-auto">
                        Zrealizował Karol Strączek
                    </p>
                </div>
            </div>
        </footer>
    );
}
