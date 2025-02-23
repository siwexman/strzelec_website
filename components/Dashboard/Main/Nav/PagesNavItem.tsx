'use client';

import { useEffect, useState } from 'react';

import DashboardBtn from '@/components/UI/Buttons/DashboardBtn';
import { getCounterConverter } from '@/store/action/magazine/upload/counterConverterCredits';
import MagazineCounter from '../../Magazines/MagazineCounter';

export default function PageNavItem({
    asyncMode,
    title,
}: {
    asyncMode?: boolean;
    title: 'czasopisma' | 'posty';
}) {
    const [data, setData] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (asyncMode) {
            getCounterConverter().then(res => setData(res?.counter));
        }
    }, [asyncMode]);

    const typeNav = {
        posty: {
            header: 'Posty',
            single: 'post',
            lower: 'posty',
            link: 'post',
            links: 'posts',
        },
        czasopisma: {
            header: 'Czasopisma',
            single: 'czasopismo',
            lower: 'czasopisma',
            link: 'magazine',
            links: 'magazines',
        },
    };

    return (
        <div className="py-4 text-center row-start-1">
            <h3 className="text-2xl py-4 font-bold">{typeNav[title].header}</h3>
            <div className="grid grid-cols-2 justify-center gap-4 relative">
                <DashboardBtn
                    isDisabled={
                        title === 'czasopisma' &&
                        (data === 0 || data === undefined)
                    }
                    link={`dashboard/new-${typeNav[title].link}`}
                    content={`Dodaj ${typeNav[title].single}`}
                />
                <DashboardBtn
                    link={`dashboard/${typeNav[title].links}`}
                    content={`Wszystkie ${typeNav[title].lower}`}
                />
                {asyncMode && <MagazineCounter counter={data} />}
            </div>
        </div>
    );
}
