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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full">
                    <h1 className="font-bold leading-tight">
                        Jednostka Strzelecka 2021
                    </h1>
                    <h4 className="text-xl">
                        im. płk. Leopolda Lisa-Kuli w{'\u00A0'}Rzeszowie
                    </h4>
                    <ButtonJoin />
                </div>
            </div>
        </section>
    );
}
