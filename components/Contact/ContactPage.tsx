import Contacts from '@/components/Contact/Contacts';

import { namesDuties } from './data';
import Supporter from './Supporter';

export default function ContactPage() {
    return (
        <div className="max-w-maxWidthSm mx-auto py-4 px-2">
            <h2 className="text-center">Kontakt</h2>

            <div className="pt-4 pb-8">
                <p className="font-semibold px-1 py-2 max-w-[500px]">
                    Jednostka Strzelecka 2021 im. płk. Leopolda Lisa-Kuli w
                    {'\u00A0'} Rzeszowie Związku Strzeleckiego „Strzelec” Józefa
                    Piłsudskiego
                </p>
                <p className="px-1 py-2">35-025 Rzeszów, ul. Jagiellońska 6</p>
                <a href="mailto:strzelec.rzeszow@op.pl" className="px-1 py-2">
                    strzelec.rzeszow@op.pl
                </a>
            </div>
            <Contacts namesDuties={namesDuties} />
            <Supporter />
        </div>
    );
}
