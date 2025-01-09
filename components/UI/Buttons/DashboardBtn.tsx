import Link from 'next/link';

export default function DashboardBtn({
    content,
    link,
    className,
}: {
    content: string;
    link: string;
    className?: string;
}) {
    return (
        <Link
            href={link}
            className={`py-2 text-center rounded-xl border-2 bg-slate-400 text-white font-semibold hover:-translate-x-1 hover:-translate-y-1 transition-all ${className}`}
        >
            {content}
        </Link>
    );
}
