import Image from 'next/image';

import Contacts from '@/components/Contact/Contacts';

import imgTowPrzyjaciol from '@/assets/partners/tow-przyjaciol.png';
import { namesDuties } from './data';

export default function ContactPage() {
    return (
        <div className="max-w-maxWidthSm mx-auto py-4 px-2">
            <h2 className="text-center">Kontakt</h2>

            <div className="pt-4 pb-8">
                <p className="font-semibold px-1 py-2 max-w-[500px]">
                    Jednostka Strzelecka 2021 im. płk. Leopolda Lisa-Kuli w
                    Rzeszowie Związku Strzeleckiego „Strzelec” Józefa
                    Piłsudskiego
                </p>
                <p className="px-1 py-2">35-355 Rzeszów, ul. Jagiellońska 6</p>
                <a href="mailto:strzelec.rzeszow@op.pl" className="px-1 py-2">
                    strzelec.rzeszow@op.pl
                </a>
            </div>
            <Contacts namesDuties={namesDuties} />

            <h4 className="text-lg py-8 mt-12">
                Stowarzyszenie wspierające Jednostkę Strzelecką 2021 im. płk.
                Leopolda Lisa-Kuli w Rzeszowie:
            </h4>
            <div className="grid grid-cols-2 px-1">
                <div>
                    <div className="py-2">
                        <p className="font-semibold">
                            Towarzystwo Przyjaciół Związku Strzeleckiego
                            „Strzelec”
                        </p>
                        <p>35-025 Rzeszów, ul. Jagiellońska 6</p>
                        <p> strzelec.rzeszow@op.pl</p>
                        <p>Konto bankowe: 57 8642 1126 2012 1122 4749 0001</p>
                        <p>Prezes – st. insp. ZS Marek STRĄCZEK</p>
                        <p>
                            tel. <a href="tel:+48604594636"></a>604 594 636
                        </p>
                        <p>
                            e-mail:{' '}
                            <a href="mailto:marek.straczek@op.pl">
                                marek.straczek@op.pl
                            </a>
                        </p>
                    </div>
                </div>
                <div className="h-full relative">
                    <Image
                        className="object-contain"
                        src={imgTowPrzyjaciol}
                        alt="logo Towarzystwa Przyjaciół"
                        fill
                        sizes="40vw"
                    />
                </div>
            </div>
        </div>
    );
}
