import Image from 'next/image';

import CloseIcon from '@/components/Icons/Close';
import { ImageFile, useImageContext } from '@/components/context/ImageContext';

export default function ImagePick(props: { image: ImageFile }) {
    const { removeImage } = useImageContext();

    return (
        <div className="p-2">
            <div className="border rounded-md relative h-[150px] w-[150px]">
                <div
                    onClick={() => removeImage(props.image.name)}
                    className="absolute top-0 right-0 z-10 bg-red-600 rounded-md cursor-pointer"
                >
                    <CloseIcon />
                </div>
                <Image
                    src={props.image.src}
                    alt={props.image.name}
                    className="rounded-md"
                    fill
                />
            </div>
        </div>
    );
}
