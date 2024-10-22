import Image from 'next/image';

import backgroundImage from '../public/backgroundImages/1.jpg';

export default function HomePage() {
    return (
        <section className="text-center py-48 w-full">
            <div className="relative">
                <Image
                    className="w-full h-full"
                    src={backgroundImage}
                    alt="Zdjecie w tle"
                />
                <div className="absolute top-0 left-0 radial-gradient-black w-full h-full"></div>
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 text-white">
                    <h1 className="font-bold">
                        Związek Strzelecki &quot;Strzelec&quot;
                    </h1>
                    <p className="font-light">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aliquid molestias magnam distinctio maiores ullam,
                        facilis sed fuga dolores explicabo animi dicta fugiat
                        corrupti quibusdam obcaecati tempore et beatae velit
                        culpa.
                    </p>
                </div>
            </div>
        </section>
    );
}
