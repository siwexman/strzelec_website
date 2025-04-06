import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

import image from '@/assets/Lis-Kula.jpg';

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
});

export default function PatronSection() {
    return (
        <section className="linear-gradient-flag py-8">
            <div className="text-center pb-8">
                <h2>Patron Jednostki</h2>
            </div>
            <div className="max-w-[500px] mx-auto md:max-w-maxWidthSm">
                <div
                    className="grid mx-4 grid-cols-1 p-8 border border-gray-700 rounded-3xl md:flex md:gap-4 marble-bg shadow-2xl"
                    style={{
                        backgroundImage: "url('/assets/texture/grungy.jpg')",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="py-2 w-48 min-h-64 relative mx-auto">
                        <Image
                            src={image}
                            alt="płk Leopold 'Lis' Kula"
                            className="h-60 rounded-lg object-cover"
                            fill
                            sizes="50vw"
                        />
                    </div>
                    <div className="col-span-2 w-full text-center p-2 flex flex-col justify-between md:w-2/3">
                        <div>
                            <h3 className={`${bebas.className} text-4xl`}>
                                Płk Leopold &quot;Lis&quot; Kula
                            </h3>
                            <p className="py-4 text-md">
                                Płk Leopold Lis-Kula, patron Jednostki
                                Strzeleckiej 2021 w{'\u00A0'}Rzeszowie Związku
                                Strzeleckiego „Strzelec” Józefa Piłsudskiego,
                                miał dokładnie 22 lata, jak rodziła się II
                                Rzeczpospolita. Ale Leopold Lis-Kula wprawiony w
                                {'\u00A0'}bojach legionowych, dalej walczył za
                                ojczyznę, tym razem o{'\u00A0'}kształt jej
                                granic. Zaledwie kilka miesięcy po odzyskaniu
                                niepodległości poległ bohatersko, w{'\u00A0'}
                                boju z{'\u00A0'}Ukraińcami. Na jego rzeszowski
                                pogrzeb przybyły tłumy, a{'\u00A0'}on sam,
                                legendarny już za życia, stał się symbolem walki
                                o{'\u00A0'}wolną Polskę.
                            </p>
                        </div>
                        <p className="py-2 font-semibold">
                            11.11.1896 - 7.03.1919
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
