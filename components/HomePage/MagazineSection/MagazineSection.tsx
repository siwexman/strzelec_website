import Link from 'next/link';
import * as motion from 'motion/react-client';

import MagazineItem from './MagazineItem';

export default function MagazineSection() {
    return (
        <section className="py-8 w-full max-w-maxWidth mx-auto">
            <div className="py-4 px-4 flex justify-center gap-8 w-2/3 mx-auto">
                <MagazineItem />
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

                    <Link href={'/czasopismo'}>
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                            }}
                        >
                            <p className="mt-2 p-4 border border-slate-600 rounded-lg w-full text-center text-lg font-semibold">
                                Czasopismo &quot;Strzelec&quot;
                            </p>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
