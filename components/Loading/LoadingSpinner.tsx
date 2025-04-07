'use client';

import { motion } from 'framer-motion';

export default function LoadingSpinner() {
    return (
        <div className="w-full py-4 h-screen flex">
            <motion.div
                className="w-24 h-24 rounded-full border-5 border-blue-400 border-r-transparent box-border m-auto"
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
