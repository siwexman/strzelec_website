import CalendarIcon from '@/components/UI/Icons/Calendar';
import { getDay, getMonthName } from '@/store/action/post/get/getDate';

export default function DateCalendar({
    date,
    isHomePage = false,
}: {
    date: Date;
    isHomePage?: boolean;
}) {
    const dateString = date.toISOString().split('T')[0];
    const currentYear = new Date().getFullYear();
    const [year, month, day] = dateString.split('-');

    const cssClass = !isHomePage ? '-top-1 left-2' : '-top-5 -left-5 scale-75';

    return (
        <div className={`absolute ${cssClass}`}>
            <CalendarIcon />
            <p className="text-md font-semibold text-white absolute top-4 left-1/2 -translate-x-1/2">
                {getMonthName(month)}
            </p>
            <p className="text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2">
                {getDay(day)}
            </p>
            {currentYear !== parseInt(year) && (
                <p className="text-xs font-semibold absolute bottom-2 left-1/2 -translate-x-1/2">
                    {year}
                </p>
            )}
        </div>
    );
}
