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

    const variants = {
        enter: {
            opacity: 0,
            x: 100,
        },
        center: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 100,
            x: -100,
        },
    };

    return (
        <AnimatePresence initial={false}>
            {backgroundImages.map((image, index) =>
                index === currentIndex ? (
                    <motion.div
                        key={currentIndex}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="w-full h-full absolute"
                    >
                        <Image
                            src={image.image}
                            alt={image.alt}
                            fill
                            sizes="50vw"
                        />
                    </motion.div>
                ) : null
            )}
        </AnimatePresence>
    );
}
