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
            <div className="text-center py-2 px-4 border-2 border-black border-dashed bg-gray-600 rounded-xl text-white font-semibold">
                <p>Przekroczono limit</p>
            </div>
        );
    }

    return (
        <Link href={link}>
            <motion.div
                whileHover={{ x: -5, y: -5 }}
                className="py-2 px-4 text-center rounded-xl border-2 bg-slate-400 text-white font-semibold"
            >
                {content}
            </motion.div>
        </Link>
    );
}
