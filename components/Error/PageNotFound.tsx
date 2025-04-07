import Link from 'next/link';

import { ArrowRight, Frown } from 'lucide-react';

export default function PageNotFound({ isHome = false }: { isHome?: boolean }) {
    const cssClass = `relative ${
        isHome ? 'h-screen flex justify-center' : 'h-[300px]'
    }`;

    return (
        <div className={cssClass}>
            <div className="py-8 text-5xl text-center my-auto">
                <div className="font-semibold">
                    <p className="py-2">Przykro nam </p>
                    <p className="py-2">Nie ma takiej strony</p>
                </div>
                <div className="py-12">
                    <Link href={'/'}>
                        <p className="text-lg">
                            Wróć do strony głównej{' '}
                            <ArrowRight className=" inline-block" />
                        </p>
                    </Link>
                </div>
            </div>
            <Frown
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 -z-10"
                width={500}
                height={500}
            />
        </div>
    );
}
