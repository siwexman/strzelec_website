'use client';

import ButtonJoin from './ButtonJoin';
import ImageSlides from './ImageSlides';

export default function TitleSection() {
    return (
        <section className="text-center w-full">
            <div className="relative w-full h-48 md:h-[800px] overflow-hidden">
                {/* <div className="relative h-48"> */}
                <ImageSlides />
                {/* </div> */}
                <div className="absolute top-0 left-0 radial-gradient-black w-full h-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 text-white">
                    <h1 className="font-bold leading-tight">
                        {/* TODO: JEDNOSTKA STRZELECKA 2021 im. płk. Leopolda Lisa-Kuli w Rzeszowie */}
                        Związek Strzelecki &quot;Strzelec&quot;
                    </h1>
                    <p className="font-light text-xs md:text-base py-1 hidden md:block">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aliquid molestias magnam distinctio maiores ullam,
                        facilis sed fuga dolores explicabo animi dicta fugiat
                        corrupti quibusdam obcaecati tempore et beatae velit
                        culpa.
                    </p>
                    <ButtonJoin />
                </div>
            </div>
        </section>
    );
}
