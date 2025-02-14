import TitleSection from '@/components/HomePage/TitleSection/TitleSection';
import NewsSection from '@/components/HomePage/News/NewsSection';
import MagazineSection from '@/components/HomePage/MagazineSection/MagazineSection';
import PatronSection from '@/components/HomePage/PatronSection';
import PartnersSection from '@/components/HomePage/PartnersSection/PartnersSection';
import Tax from '@/components/HomePage/GiveTax/Tax';

export default function HomePage() {
    return (
        <>
            <TitleSection />
            <NewsSection />
            <MagazineSection />
            <Tax />
            <PatronSection />
            <PartnersSection />
        </>
    );
}
