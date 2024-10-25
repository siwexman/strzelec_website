import akImg from '@/public/partners/ak.png';
import kombatantImg from '@/public/partners/kombatant.jpg';
import monImg from '@/public/partners/mon.png';
import podkarpackieImg from '@/public/partners/podkarpackie.png';
import ropsImg from '@/public/partners/rops.png';
import stolicaInnowacjiImg from '@/public/partners/stolica-innowacji.jpg';
import towPrzyjaciolImg from '@/public/partners/tow-przyjaciol.png';

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
