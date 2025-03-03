import Image from 'next/image';

import logoZS from '../../assets/logo_zs_strzelec.png';
import InfoButtons from './InfoButtons/InfoButtons';
import UnderFooter from './UnderFooter/UnderFooter';

export default function Footer() {
    return (
        <footer className="max-w-maxWidth mx-auto relative z-10 bg-white">
            <div className="w-full h-full justify-between px-4 md:h-28 md:flex">
                <div className="hidden md:block">
                    <Image
                        src={logoZS}
                        alt="Logo ZS Strzelec"
                        className="w-full h-full"
                    />
                </div>
                <h2 className="text-center py-4 md:hidden">Kontakt</h2>
                <InfoButtons />
            </div>
            <div className="w-full bg-black h-px my-4 rounded-lg linear-gradient-black"></div>
            <UnderFooter />
        </footer>
    );
}
