import Image from 'next/image';

import backgroundImage from '@/public/backgroundImages/1.jpg';
import Link from 'next/link';

export default function TitleSection() {
    return (
        <section className="text-center pt-48 w-full">
            <div className="relative">
                <Image
                    className="w-full h-full"
                    src={backgroundImage}
                    alt="Zdjecie w tle"
                />
                <div className="absolute top-0 left-0 radial-gradient-black w-full h-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 text-white">
                    <h1 className="font-bold leading-tight">
                        Związek Strzelecki &quot;Strzelec&quot;
                    </h1>
                    <p className="font-light">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aliquid molestias magnam distinctio maiores ullam,
                        facilis sed fuga dolores explicabo animi dicta fugiat
                        corrupti quibusdam obcaecati tempore et beatae velit
                        culpa.
                    </p>
                    <div className="py-8">
                        <Link
                            href={''}
                            className="p-4 text-xl bg-black font-semibold rounded-lg border"
                        >
                            Zostań Strzelcem
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
