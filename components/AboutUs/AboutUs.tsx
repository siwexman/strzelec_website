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
                    program i{'\u00A0'}metody działania „Strzelca” istniejącego
                    w Polsce w okresie międzywojennym. Zadaniem „Strzelca” jest
                    rozbudzanie i{'\u00A0'}hartowanie wśród młodzieży ducha
                    narodowego, karności, dzielności moralnej i{'\u00A0'}
                    fizycznej oraz szerzenie wiedzy wojskowe
                </p>
            </div>
            <NavButtons />
            <Sections />
            <Structure />
        </div>
    );
}
