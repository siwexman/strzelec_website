import MagazineSection from './MagazineSection/MagazineSection';
import NewsSection from './News/NewsSection';
import PartnersSection from './PartnersSection/PartnersSection';
import PatronSection from './Patron/PatronSection';
import TitleSection from './TitleSection/TitleSection';

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
