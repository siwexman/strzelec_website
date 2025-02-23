import * as motion from 'motion/react-client';
import { getAllMagazines } from '@/store/action/magazine/get/getMagazines';

import MagazineItem from './MagazineItem';
import Link from 'next/link';

export default async function Magazines({ isUser = false }) {
    const magazines = await getAllMagazines();

    if (!magazines || magazines.length === 0) {
        return (
            <div className="text-center py-4">
                <div>
                    <h3 className="text-2xl">Nie ma jeszcze czasopism</h3>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="mt-4 rounded px-4 py-2 bg-orange-300"
                    >
                        <Link href="/dashboard/new-magazine">
                            <p className="text-lg font-semibold">Dodaj nowe!</p>
                        </Link>
                    </motion.button>
                </div>
            </div>
        );
    }

    return (
        <div className="py-4 grid grid-cols-4 gap-8">
            {magazines.map(magazine => (
                <MagazineItem
                    key={magazine.id}
                    magazine={magazine}
                    isUser={isUser}
                />
            ))}
        </div>
    );
}
