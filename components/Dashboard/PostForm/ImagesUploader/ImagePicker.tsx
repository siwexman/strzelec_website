import { Image, ImageFile } from '@/types/imageFile';
import ImagePick from './ImagePick';

export default function ImagePicker(props: {
    pickedImages: ImageFile[];
    serverImages?: Image[];
}) {
    const isEmpty = props.pickedImages.length === 0;

    const pickerClass = props.serverImages?.length !== 0 && 'grid grid-rows-2';

    return (
        <div
            className={`w-full border rounded-md overflow-x-auto relative ${pickerClass}`}
        >
            {props.serverImages && props.serverImages.length > 0 && (
                <div>
                    <p className="text-xs pt-1">Zdjęcia z serwera</p>
                    <div className="flex overflow-x-auto relative self-center">
                        {props.serverImages.map(img => (
                            <ImagePick key={img.id} image={img} />
                        ))}
                    </div>
                </div>
            )}
            <div className={`border-t ${isEmpty && 'justify-center'}`}>
                {pickerClass && <p className="text-xs pt-1">Zdjęcia dodane</p>}
                {isEmpty ? (
                    <div className="p-2">
                        <div className="text-lg h-[150px] flex w-full justify-center">
                            <p className="my-auto text-gray-500">
                                Tutaj pojawią się twoje zdjęcia
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="flex overflow-x-auto relative self-center">
                        {props.pickedImages.map((img, index) => (
                            <ImagePick key={index} image={img} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
