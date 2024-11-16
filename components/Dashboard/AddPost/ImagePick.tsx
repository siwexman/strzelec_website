import Image from 'next/image';

import CloseIcon from '@/components/Icons/Close';
import { useImageContext } from '@/components/context/ImageContext';
import { ImageFile } from '@/types/imageFile';

export default function ImagePick(props: { image: ImageFile }) {
    const { removeImage } = useImageContext();

    return (
        <div className="p-2">
            <div className="border rounded-md relative h-[150px] w-[150px]">
                <div
                    onClick={() => removeImage(props.image.base.name)}
                    className="absolute top-0 right-0 z-10 bg-red-600 rounded-md cursor-pointer"
                >
                    <CloseIcon />
                </div>
                <Image
                    src={props.image.src}
                    alt={props.image.base.name}
                    className="rounded-md"
                    fill
                />
            </div>
        </div>
    );
}
