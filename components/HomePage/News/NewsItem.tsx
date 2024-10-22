import Image from 'next/image';
import Link from 'next/link';

import backgroundImage from '@/public/backgroundImages/1.jpg';
import ArrowRightIcon from '@/components/Icons/ArrowRight';

export default function NewsItem() {
    return (
        <div className="px-4 py-2">
            <div className="border rounded-r-2xl shadow">
                <Image className="rounded-r-2xl" src={backgroundImage} alt="" />
                <div className="py-4 px-2">
                    <h4 className="text-xl font-semibold py-2">
                        Jakiś tytuł tutaj
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet aspernatur asperiores ad veritatis nobis, neque
                        eius iusto.
                    </p>
                    <Link href={''} className="flex justify-end px-4">
                        Czytaj dalej <ArrowRightIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}
