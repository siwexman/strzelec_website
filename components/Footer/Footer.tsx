import Image from 'next/image';

import logoZS from '../../public/LogoZSStrzelec.png';

import EnvelopeIcon from '../Icons/Envelope';
import MapPinIcon from '../Icons/MapPin';
import MoneyCheckIcon from '../Icons/MoneyCheck';
import WatchIcon from '../Icons/Watch';
import UserIcon from '../Icons/User';

export default function Footer() {
    return (
        <footer className="max-w-maxWidth mx-auto">
            <div className="w-full flex justify-between px-4 h-28">
                <div>
                    <Image
                        src={logoZS}
                        alt="Logo ZS Strzelec"
                        className="w-full h-full"
                    />
                </div>
                <div className="my-auto flex gap-1">
                    <div className="rounded-full bg-slate-300 p-6 cursor-pointer">
                        <EnvelopeIcon />
                    </div>
                    <div className="rounded-full bg-slate-300 p-6">
                        <MapPinIcon />
                    </div>
                    <div className="rounded-full bg-slate-300 p-6">
                        <MoneyCheckIcon />
                    </div>
                    <div className="rounded-full bg-slate-300 p-6">
                        <WatchIcon />
                    </div>
                </div>
            </div>
            <div className="w-full bg-black h-px my-4 rounded-lg gradient-black"></div>
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
