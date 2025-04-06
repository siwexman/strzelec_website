import Image from 'next/image';

import imgTowPrzyjaciol from '@/assets/partners/tow-przyjaciol.png';

export default function Supporter() {
    return (
        <div className="pb-4">
            <h4 className="text-lg py-8 mt-12">
                Stowarzyszenie wspierające Jednostkę Strzelecką 2021 im. płk.
                Leopolda Lisa-Kuli w{'\u00A0'}Rzeszowie:
            </h4>
            <div className="grid grid-rows-2 gap-4 md:grid-rows-1 md:grid-cols-2 px-1">
                <div>
                    <div className="py-2">
                        <p className="font-semibold">
                            Towarzystwo Przyjaciół Związku Strzeleckiego
                            „Strzelec”
                        </p>
                        <p>35-025 Rzeszów, ul. Jagiellońska 6</p>
                        <p> strzelec.rzeszow@op.pl</p>
                        <p>Konto bankowe: 57 8642 1126 2012 1122 4749 0001</p>
                        <p>KRS: 0000283993</p>
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
                <div className="h-full relative row-start-1 md:col-start-2">
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
