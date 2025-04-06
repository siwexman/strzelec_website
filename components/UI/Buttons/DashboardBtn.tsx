import * as motion from 'motion/react-client';
import Link from 'next/link';

export default function DashboardBtn({
    content,
    link,
    isDisabled,
}: {
    content: string;
    link: string;
    isDisabled?: boolean;
}) {
    if (isDisabled) {
        return (
            <div className="py-2 px-4 text-center rounded-xl border-2 border-gray-300 bg-slate-400 text-gray-300 font-semibold">
                <p>Przekroczono limit</p>
            </div>
        );
    }

    return (
        <Link href={link}>
            <motion.div
                whileHover={{ x: -5, y: -5 }}
                className="p-2 md:py-2 md:px-4 text-center rounded-xl border-2 bg-slate-400 text-white font-semibold"
            >
                {content}
            </motion.div>
        </Link>
    );
}
