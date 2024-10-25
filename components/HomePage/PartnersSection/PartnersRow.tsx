import Image from 'next/image';

import { Partners } from '@/components/data/partners';

export default function PartnersRow({ images }: Partners) {
    return (
        <div className="flex scroll-animation">
            {images.map(image => {
                return (
                    <div key={image.name} className="px-4">
                        <Image
                            src={image.src}
                            alt={image.name}
                            className="h-44 max-w-52 object-contain"
                        />
                    </div>
                );
            })}
        </div>
    );
}
