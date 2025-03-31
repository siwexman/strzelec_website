'use client';

import Sections from '@/components/AboutUs/SectionImgs/Sections';
import NavButtons from '@/components/AboutUs/NavButtons';
import Structure from '@/components/AboutUs/Structure';

export default function AboutUs() {
    return (
        <div className="max-w-maxWidthSm mx-auto py-8">
            <h2 className="text-center py-4">O NAS</h2>
            <div className="py-8">
                <p className="text-lg text-center">
                    Związek Strzelecki „Strzelec” Józefa Piłsudskiego jest
                    patriotycznym stowarzyszeniem młodzieży, kontynuującym
                    program i metody działania „Strzelca” istniejącego w Polsce
                    w okresie międzywojennym. Zadaniem „Strzelca” jest
                    rozbudzanie i hartowanie wśród młodzieży ducha narodowego,
                    karności, dzielności moralnej i fizycznej oraz szerzenie
                    wiedzy wojskowe
                </p>
                {/* <p className="font-light italic p-6 w-2/3 mx-auto text-center">
            &quot;(...) najważniejsze jest wychowanie w duchu
            patriotycznym, kształtowanie osobowości młodych ludzi
            poprzez dyscyplinę pro wojskową, organizacja wolnego czasu
            tak by młodzież mogła się spełniać...&quot;
            </p> */}
            </div>
            <NavButtons />
            <Sections />
            <Structure />
        </div>
    );
}
