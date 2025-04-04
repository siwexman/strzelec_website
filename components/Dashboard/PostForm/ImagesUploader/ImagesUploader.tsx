import { Button } from '@/components/UI/button';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/UI/form';
import { Input } from '@/components/UI/input';
import ImagePicker from '@/components/Dashboard/PostForm/ImagesUploader/ImagePicker';
import { ChangeEvent, useEffect, useRef } from 'react';
import { useImageContext } from '@/components/context/ImageContext';
import { ImageFile, ImageWithDeleted } from '@/types/imageFile';
import { imageSchema } from '@/types/formSchema';
import { UseFormReturn } from 'react-hook-form';

export default function ImagesUploader({
    form,
    edit,
    serverImages,
}: {
    form: UseFormReturn<
        {
            title: string;
            summary: string;
            description: string;
            images?: ImageFile[];
        },
        undefined
    >;
    edit?: boolean;
    serverImages?: ImageWithDeleted[];
}) {
    const { images, addImages, setServerImages } = useImageContext();
    const imageInput = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (serverImages && serverImages?.length > 0) {
            setServerImages(serverImages);
        }
    }, [setServerImages, serverImages]);

    function handlePickClick() {
        if (imageInput.current) {
            imageInput.current.click();
        }
    }

    function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) {
            return;
        }

        const files = event?.target.files;

        if (files.length === 0) {
            return;
        }

        const images: ImageFile[] = [];

        Array.from(files).forEach(file => {
            const result = imageSchema.safeParse(file);

            if (!result.success) {
                form.setError('images', {
                    type: 'custom',
                    message: result.error.errors[0].message,
                });
                return;
            }
            const fileReader = new FileReader();

            fileReader.onload = () => {
                const image = {
                    base: file,
                    src: fileReader.result as string,
                };
                images.push(image);

                if (images.length === files.length) {
                    addImages(images);
                }
            };

            fileReader.readAsDataURL(file);
        });
    }

    return (
        <div className="w-full flex flex-col pt-4">
            <div className="grid grid-cols-3 gap-2 relative items-center">
                <div>
                    <FormField
                        control={form.control}
                        name="images"
                        render={({ field }) => (
                            <FormItem className="hidden">
                                <FormControl>
                                    <Input
                                        ref={imageInput}
                                        name={field.name}
                                        multiple
                                        accept="image/png, image/jpeg, image/jpg"
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                </FormControl>
                                {form.formState.errors.images && (
                                    <p className="absolute px-4 bottom-0 text-sm font-medium text-red-500">
                                        {form.formState.errors.images.message}
                                    </p>
                                )}
                            </FormItem>
                        )}
                    />
                    <Button
                        className=" bg-slate-600 w-3/4"
                        type="button"
                        onClick={handlePickClick}
                    >
                        Wybierz zdjęcia
                    </Button>
                </div>
                <div className="col-span-2 relative py-2">
                    <FormLabel
                        htmlFor="images"
                        className={`font-semibold ${
                            form.formState.errors.images && 'text-red-500'
                        }`}
                    >
                        Twoje zdjęcia
                    </FormLabel>
                    <ImagePicker
                        pickedImages={images}
                        serverImages={serverImages}
                        edit={edit}
                    />
                    {form.formState.errors.images && (
                        <p className="text-sm text-red-500">
                            {form.formState.errors.images.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
