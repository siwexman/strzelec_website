import Image from 'next/image';

import logoZS from '../../public/LogoZSStrzelec.png';
import InfoButtons from './InfoButtons/InfoButtons';
import UnderFooter from './UnderFooter';

export default function Footer() {
    return (
        <footer className="max-w-maxWidth mx-auto relative z-10 bg-white">
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
            <div className="w-full bg-black h-px my-4 rounded-lg linear-gradient-black"></div>
            <UnderFooter />
        </footer>
    );
}
