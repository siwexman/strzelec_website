import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { backgroundImages } from '@/store/data/backgroundImages';

export default function ImageSlides() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev =>
                prev < backgroundImages.length - 1 ? prev + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {backgroundImages.map((image, index) =>
                index === currentIndex ? (
                    <motion.div
                        key={index}
                        className="w-full h-full absolute"
                        initial={{ opacity: 0.5 }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{ opacity: 0, rotate: -10, x: -500, scale: 0.8 }}
                        transition={{ duration: 1 }}
                    >
                        <Image src={image.image} alt={image.alt} fill />
                    </motion.div>
                ) : null
            )}
        </AnimatePresence>
    );
}
