import Link from 'next/link';
import * as motion from 'motion/react-client';

import MagazineItem from './MagazineItem';

export default function MagazineSection() {
    return (
        <section className="py-8 w-full max-w-maxWidth mx-auto">
            <div className="py-4 px-4 text-center gap-8 lg:w-2/3 mx-auto">
                <div className="grid grid-cols-1 gap-6 gap-x-0 md:grid-cols-3 md:grid-rows-2 w-full px-4 py-2">
                    <MagazineItem cssClass="py-2 row-start-2 md:row-span-2" />
                    <div className="col-span-2">
                        <h2 className="pb-4">
                            Czasopismo &quot;Strzelec&quot;
                        </h2>
                        <p>
                            &quot;Strzelec&quot; czasopismo Związku
                            Strzeleckiego &quot;Strzelec&quot; Józefa
                            Piłsudskiego. Zawiera ciekawe artykuły historyczne,
                            relacje z{'\u00A0'}wydarzeń i{'\u00A0'}działalności
                            naszej organizacji. Ukazuje się od 2007 roku.
                        </p>
                    </div>
                    <Link
                        className="row-start-3 md:row-auto md:col-span-2 py-4"
                        href={'/czasopismo'}
                    >
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
            <div className="flex justify-center"></div>
        </section>
    );
}
