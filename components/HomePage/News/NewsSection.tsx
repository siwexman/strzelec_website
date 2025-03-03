import Link from 'next/link';

import NewsComponents from './NewsComponents';
import ArrowRightIcon from '@/components/UI/Icons/ArrowRight';

export default function NewsSection() {
    return (
        <section className="py-8 w-full max-w-maxWidthSm mx-auto">
            <div className="text-center pb-4">
                <h2>Sprawdź najświeższe aktualności</h2>
            </div>
            <NewsComponents />
            <div className="text-center">
                <Link
                    href={'/aktualnosci'}
                    className="flex justify-center gap-2 font-semibold text-md "
                >
                    Przeczytaj więcej <ArrowRightIcon />
                </Link>
            </div>
        </section>
    );
}
