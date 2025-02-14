import akImg from '@/assets/partners/ak.png';
import kombatantImg from '@/assets/partners/kombatant.jpg';
import monImg from '@/assets/partners/mon.png';
import podkarpackieImg from '@/assets/partners/podkarpackie.png';
import ropsImg from '@/assets/partners/rops.png';
import stolicaInnowacjiImg from '@/assets/partners/stolica-innowacji.jpg';
import towPrzyjaciolImg from '@/assets/partners/tow-przyjaciol.png';

import { StaticImageData } from 'next/image';

export interface Partners {
    images: {
        src: StaticImageData;
        name: string;
    }[];
}

export const partners = [
    {
        src: akImg,
        name: 'AK',
    },
    {
        src: kombatantImg,
        name: 'Kombatanci',
    },
    {
        src: monImg,
        name: 'Mon',
    },
    {
        src: podkarpackieImg,
        name: 'Podkarpackie',
    },
    {
        src: ropsImg,
        name: 'ROPS',
    },
    {
        src: stolicaInnowacjiImg,
        name: 'Rzeszów',
    },
    {
        src: towPrzyjaciolImg,
        name: 'Towarzystwo',
    },
];
