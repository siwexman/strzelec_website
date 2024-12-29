import { ImageFile } from '@/types/imageFile';
import ImagePick from './ImagePick';

export default function ImagePicker(props: { pickedImages: ImageFile[] }) {
    const isEmpty = props.pickedImages.length === 0;

    return (
        <div
            className={`w-full border rounded-md flex overflow-x-auto relative ${
                isEmpty && 'justify-center'
            }`}
        >
            {isEmpty ? (
                <div className="p-2">
                    <div className="text-lg h-[150px] w-[250px] flex">
                        <p className="my-auto text-gray-500">
                            Tutaj pojawią się twoje zdjęcia
                        </p>
                    </div>
                </div>
            ) : (
                props.pickedImages.map((img, index) => (
                    <ImagePick key={index} image={img} />
                ))
            )}
        </div>
    );
}
