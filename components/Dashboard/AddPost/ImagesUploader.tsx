import { Button } from '@/components/UI/button';
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/UI/form';
import { Input } from '@/components/UI/input';
import ImagePicker from '@/components/Dashboard/AddPost/ImagePicker';
import { ChangeEvent, useRef } from 'react';
import { useImageContext } from '@/components/context/ImageContext';
import { ImageFile } from '@/types/imageFile';
import { imageSchema } from '@/types/formSchema';

export default function ImagesUploader({ form }) {
    const { images, addImages } = useImageContext();
    const imageInput = useRef<HTMLInputElement | null>(null);

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
        <div className="w-full flex flex-col">
            <FormLabel htmlFor="images" className="col-span-4">
                Twoje zdjęcia:
            </FormLabel>
            <div className="flex justify-between gap-2 relative">
                <FormField
                    control={form.control}
                    name="images"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl className="hidden">
                                <Input
                                    ref={imageInput}
                                    name={field.name}
                                    multiple
                                    accept="image/png, image/jpeg, image/jpg"
                                    type="file"
                                    className="hidden"
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
                    className="w-1/3 my-auto bg-slate-600"
                    type="button"
                    onClick={handlePickClick}
                >
                    Wybierz zdjęcia
                </Button>
                <ImagePicker pickedImages={images} />
            </div>
        </div>
    );
}
