import CalendarIcon from '@/components/UI/Icons/Calendar';
import { getDay, getMonthName } from '@/store/action/post/get/getDate';

export default function DateCalendar({ date }: { date: string }) {
    const currentYear = new Date().getFullYear();
    const [year, month, day] = date.split('-');

    console.log(parseInt(month));

    return (
        <div className="absolute -top-1 left-2">
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
