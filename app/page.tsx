import TitleSection from '@/components/HomePage/TitleSection';
import NewsSection from '@/components/HomePage/News/NewsSection';
import MagazineSection from '@/components/HomePage/MagazineSection';
import PatronSection from '@/components/HomePage/PatronSection';

export default function HomePage() {
    return (
        <>
            <TitleSection />
            <NewsSection />
            <MagazineSection />
            <PatronSection />
            <section>
                <div className="text-center py-8">
                    <h2>Nasi Patroni</h2>
                </div>
                <div>patroni...</div>
            </section>
        </>
    );
}
