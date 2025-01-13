import LatestNews from '@/components/Dashboard/Main/LatestNews/LatestNews';
import DashboardBtn from '@/components/UI/Buttons/DashboardBtn';

export default function Dashboard() {
    return (
        <div className="max-w-maxWidthSm mx-auto">
            <div className="px-4 pt-8 pb-4 w-full grid grid-cols-5 gap-4">
                {/* TODO: Google analitics */}
                {/* <div className="bg-slate-600 col-span-5 row-span-3 p-4">
                    Google Analitics
                </div> */}
                <DashboardBtn
                    link="dashboard/new"
                    content="Dodaj nowy post"
                    className="col-start-2"
                />
                <DashboardBtn
                    link="dashboard/posts"
                    content="Wszystkie posty"
                />
                <DashboardBtn
                    link="dashboard/new-magazine"
                    content="Dodaj czasopismo"
                />
                <LatestNews />
            </div>
        </div>
    );
}
