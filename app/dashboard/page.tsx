import LatestNews from '@/components/Dashboard/Main/LatestNews/LatestNews';
import PagesNav from '@/components/Dashboard/Main/Nav/PagesNav';

export default function Dashboard() {
    return (
        <div className="max-w-maxWidthSm mx-auto">
            <div className="px-4 pt-8 pb-4 w-full grid grid-cols-6 gap-4">
                {/* TODO: Google analitics */}
                {/* <div className="bg-slate-600 col-span-5 row-span-3 p-4">
                    Google Analitics
                </div> */}
                <PagesNav />
                <LatestNews />
            </div>
        </div>
    );
}
