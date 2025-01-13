import Image from 'next/image';

import { useImageContext } from '@/components/context/ImageContext';
import { Image as ImageType, ImageFile } from '@/types/imageFile';
import DeleteItem from '../../../UI/Buttons/DeleteItem';
import { useState } from 'react';

export default function ImagePick(props: { image: ImageFile | ImageType }) {
    const { removeImage, togglePropertyServerImage } = useImageContext();
    const [isUndo, setIsUndo] = useState(false);

    function isImageFile(image: ImageFile | ImageType): image is ImageFile {
        return (image as ImageFile).base !== undefined;
    }

    function isImageType(image: ImageFile | ImageType): image is ImageType {
        return (image as ImageType).id !== undefined;
    }

    function handleDelete(image: ImageFile | ImageType) {
        if (isImageFile(image)) {
            // removeImage client side from input
            removeImage(image.base.name);
        } else if (isImageType(image)) {
            // removeImageFromServer server side
            setIsUndo(prevState => !prevState);
            togglePropertyServerImage(image.id);
        }
    }

    return (
        <div className="p-2">
            <div className="border rounded-md relative h-[150px] w-[150px]">
                <DeleteItem
                    handleClick={() => handleDelete(props.image)}
                    isUndo={isUndo}
                />
                {isImageFile(props.image) && (
                    <Image
                        src={props.image.src}
                        alt={props.image.base.name}
                        className="rounded-md"
                        fill
                        sizes="5vw"
                        loading="lazy"
                    />
                )}
                {isImageType(props.image) && (
                    <Image
                        src={props.image.url}
                        alt={props.image.id.toString()}
                        className={`rounded-md ${isUndo && 'opacity-50'}`}
                        fill
                        sizes="5vw"
                        loading="lazy"
                    />
                )}
            </div>
        </div>
    );
}
