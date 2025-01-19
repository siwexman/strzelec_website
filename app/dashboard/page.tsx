import LatestNews from '@/components/Dashboard/Main/LatestNews/LatestNews';
import DashboardBtn from '@/components/UI/Buttons/DashboardBtn';

export default function Dashboard() {
    return (
        <div className="max-w-maxWidthSm mx-auto">
            <div className="px-4 pt-8 pb-4 w-full grid grid-cols-6 gap-4">
                {/* TODO: Google analitics */}
                {/* <div className="bg-slate-600 col-span-5 row-span-3 p-4">
                    Google Analitics
                </div> */}
                <div className="col-span-full grid gap-4">
                    <div className="py-4 text-center">
                        <h3 className="text-xl py-4 font-bold">Posty</h3>
                        <div className="flex justify-center gap-4">
                            <DashboardBtn
                                link="dashboard/new"
                                content="Dodaj nowy post"
                                className="px-4"
                            />
                            <DashboardBtn
                                link="dashboard/posts"
                                content="Wszystkie posty"
                                className="px-4"
                            />
                        </div>
                    </div>
                    <div className="py-4 text-center col-start-2">
                        <h3 className="text-xl py-4 font-bold">Czasopisma</h3>
                        <div className="flex justify-center gap-4">
                            <DashboardBtn
                                link="dashboard/new-magazine"
                                content="Dodaj czasopismo"
                                className="px-4"
                            />
                            <DashboardBtn
                                link="dashboard/magazines"
                                content="Czasopisma"
                                className="px-4"
                            />
                        </div>
                    </div>
                </div>
                <LatestNews />
            </div>
        </div>
    );
}
