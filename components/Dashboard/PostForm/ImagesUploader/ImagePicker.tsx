import { Image, ImageFile } from '@/types/imageFile';
import ImagePick from './ImagePick';

export default function ImagePicker(props: {
    pickedImages: ImageFile[];
    serverImages?: Image[];
    edit?: boolean;
}) {
    const isEmpty = props.pickedImages.length === 0;

    const pickerClass = props.serverImages?.length !== 0 && 'grid grid-rows-2';

    return (
        <div
            className={`w-full border rounded-md overflow-x-auto relative ${pickerClass}`}
        >
            {!props.edit && (
                        <div className="bg-yellow-300 text-sm rounded-lg absolute bottom-0 translate-x-1/2">
                            <p className="px-2">
                                Pierwsze zdjęcie będzie zdjęciem głównym postu!
                            </p>
                        </div>
                    )}
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
            <div className={`${isEmpty && 'justify-center'}`}>
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
