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
            <div className="w-1/2 mx-auto p-8 border border-gray-700 rounded-3xl flex gap-8">
                <Image
                    src={image}
                    alt="płk Leopold 'Lis' Kula"
                    className="h-60 rounded-lg"
                />
                <div className="w-full text-center p-2 flex flex-col justify-between">
                    <div>
                        <h3 className={`${bebas.className} text-4xl`}>
                            Płk Leopold &quot;Lis&quot; Kula
                        </h3>
                        <p className="py-4 text-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quas illo officia beatae, ea non
                            necessitatibus exercitationem eligendi quos,
                            accusamus in voluptatibus quis. Doloribus possimus a
                            repudiandae error reiciendis veniam officia?
                        </p>
                    </div>
                    <p>ur - śm</p>
                </div>
            </div>
        </section>
    );
}
