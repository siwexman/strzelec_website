'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Tax() {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed top-1/2 right-0 z-20 p-2 rounded-l-lg bg-red-600 font-semibold text-white text-center"
                animate={{ x: [5, 0, 5] }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1,
                }}
            >
                <Link href="/podatek">
                    <p>Przekaż</p>
                    <p>
                        <span className="text-3xl">1,5%</span>
                    </p>
                </Link>
            </motion.div>
        </AnimatePresence>
    );
}
