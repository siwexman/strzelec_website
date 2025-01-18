import TitleSection from '@/components/HomePage/TitleSection';
import NewsSection from '@/components/HomePage/News/NewsSection';
import MagazineSection from '@/components/HomePage/MagazineSection/MagazineSection';
import PatronSection from '@/components/HomePage/PatronSection';
import PartnersSection from '@/components/HomePage/PartnersSection/PartnersSection';

export default function HomePage() {
    return (
        <>
            <TitleSection />
            <NewsSection />
            <MagazineSection />
            <PatronSection />
            <PartnersSection />
        </>
    );
}
