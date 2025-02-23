'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
    return (
        <div className="w-full py-4">
            <motion.div
                className="w-12 h-12 rounded-full border-5 border-blue-400 border-r-transparent box-border mx-auto"
                animate={{
                    rotate: 360,
                    transition: {
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                    },
                }}
            ></motion.div>
        </div>
    );
}
