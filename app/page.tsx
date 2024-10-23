import Link from 'next/link';
import Image from 'next/image';

import frontPage from '@/public/2020.png';
import TitleSection from '@/components/HomePage/TitleSection';
import NewsSection from '@/components/HomePage/News/NewsSection';

export default function HomePage() {
    return (
        <>
            <TitleSection />
            <NewsSection />
            <section className="py-8 w-full max-w-maxWidth mx-auto">
                <div className="px-4 flex justify-between gap-4">
                    <div>
                        <Link href={''}>
                            <Image
                                className="rounded"
                                src={frontPage}
                                alt="Okładka czasopisma"
                            />
                        </Link>
                    </div>
                    <div>
                        <h2>Czasopismo &quot;Strzelec&quot;</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur odio obcaecati velit? Perferendis ex
                            rerum tempora laborum velit nemo aperiam ea quidem
                            perspiciatis provident, reiciendis non debitis alias
                            voluptatum qui.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
