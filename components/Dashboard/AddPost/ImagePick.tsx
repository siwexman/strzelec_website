import Image from 'next/image';

import { useImageContext } from '@/components/context/ImageContext';
import { ImageFile } from '@/types/imageFile';
import DeleteItem from '../Main/DeleteItem';

export default function ImagePick(props: { image: ImageFile }) {
    const { removeImage } = useImageContext();

    return (
        <div className="p-2">
            <div className="border rounded-md relative h-[150px] w-[150px]">
                <DeleteItem
                    handleClick={() => removeImage(props.image.base.name)}
                />
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
