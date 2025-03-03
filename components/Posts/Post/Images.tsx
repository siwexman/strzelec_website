import Image from 'next/image';
import { motion } from 'framer-motion';

import { Image as ImageType } from '@/types/imageFile';

interface ImagesProps {
    images: ImageType[];
    onClick: (index: number) => void;
}

export default function Images({ images, onClick }: ImagesProps) {
    function handleClickImage(index: number) {
        onClick(index);
    }

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <div className="text-center text-lg font-semibold">
                <p>Zdjęcia:</p>
            </div>
            <div className="py-2 grid grid-cols-3 md:grid-cols-5 gap-4">
                {images.map((image, index) => (
                    <motion.div
                        className="relative w-full h-40"
                        key={index}
                        onClick={() => handleClickImage(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Image
                            className="cursor-pointer object-contain"
                            src={image.url}
                            alt={index.toString()}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            fill
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
