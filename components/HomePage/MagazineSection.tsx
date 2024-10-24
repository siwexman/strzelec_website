import Link from 'next/link';
import Image from 'next/image';

import frontPage from '@/public/2020.png';

export default function MagazineSection() {
    return (
        <section className="py-8 w-full max-w-maxWidth mx-auto">
            <div className="py-4 px-4 flex justify-center gap-8 w-2/3 mx-auto">
                <div>
                    <Image
                        className="rounded"
                        src={frontPage}
                        alt="Okładka czasopisma"
                    />
                </div>
                <div className="w-full px-4 py-2 flex flex-col justify-between">
                    <div>
                        <h2 className="pb-4">
                            Czasopismo &quot;Strzelec&quot;
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur odio obcaecati velit? Perferendis ex
                            rerum tempora laborum velit nemo aperiam ea quidem
                            perspiciatis provident, reiciendis non debitis alias
                            voluptatum qui.
                        </p>
                    </div>

                    <Link href={''}>
                        <p className="mt-2 p-4 border border-slate-600 rounded-lg w-full text-center text-lg font-semibold">
                            Czasopismo &quot;Strzelec&quot;
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
