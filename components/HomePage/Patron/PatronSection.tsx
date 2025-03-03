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
            <div className="max-w-[500px] mx-auto md:max-w-[720px]">
                <div className="grid mx-4 grid-cols-1 p-8 border border-gray-700 rounded-3xl md:gap-4 md:gap-x-0 lg:grid-cols-2 lg:grid-rows-1">
                    <div className="py-2 w-48 min-h-64 relative mx-auto">
                        <Image
                            src={image}
                            alt="płk Leopold 'Lis' Kula"
                            className="h-60 rounded-lg "
                            fill
                            sizes="50vw"
                        />
                    </div>
                    <div className="col-span-2 w-full text-center p-2 flex flex-col justify-between lg:col-span-1">
                        <div>
                            <h3 className={`${bebas.className} text-4xl`}>
                                Płk Leopold &quot;Lis&quot; Kula
                            </h3>
                            <p className="py-4 text-md">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas illo officia beatae, ea
                                non necessitatibus exercitationem eligendi quos,
                                accusamus in voluptatibus quis. Doloribus
                                possimus a repudiandae error reiciendis veniam
                                officia?
                            </p>
                        </div>
                        <p>ur - śm</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
