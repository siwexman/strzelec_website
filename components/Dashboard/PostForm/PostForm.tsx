import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ImageWithDeleted } from '@/types/imageFile';
import { userFormSchema } from '@/types/formSchema';

import uploadPost from '@/store/action/post/upload/uploadPost';

import TiptapEditor from '@/components/Dashboard/TipTapEditor/TiptapEditor';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/UI/form';
import { Input } from '@/components/UI/input';
import ImagesUploader from '@/components/Dashboard/PostForm/ImagesUploader/ImagesUploader';
import { Button } from '@/components/UI/button';
import { useImageContext } from '@/components/context/ImageContext';
import { useModal } from '@/components/context/ModalContext';
import { editPost } from '@/store/action/post/edit/editPost';
import { deleteImage } from '@/store/action/image/deleteImage';

export default function PostForm({
    title = '',
    summary = '',
    description = '',
    serverImages = [],
    editId,
}: {
    title?: string;
    summary?: string;
    description?: string;
    serverImages?: ImageWithDeleted[];
    editId?: number;
}) {
    const { handleOpen } = useModal();
    const { images, serverUploadedImages } = useImageContext();
    const [isPending, setIsPending] = useState(false);

    const form = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        mode: 'onChange',
        defaultValues: {
            title: title,
            summary: summary,
            description: description,
            images: [],
        },
    });

    async function handleSubmit(values: z.infer<typeof userFormSchema>) {
        setIsPending(true);
        if (serverImages.length === 0 && images.length === 0) {
            form.setError(
                'images',
                {
                    type: 'custom',
                    message: 'Nie przesłano żadnych zdjęć',
                    types: {
                        required: 'Nie przesłano zdjęcia',
                    },
                },
                { shouldFocus: true }
            );
            console.log('error');
            console.log(form.formState.errors.images);
            return;
        }
        try {
            const formData = new FormData();

            formData.append('title', values.title);
            formData.append('summary', values.summary);
            formData.append('description', values.description);
            for (const image of images) {
                formData.append('images', image.base);
            }

            if (!editId) {
                // upload new post
                const modalInfo = await uploadPost(formData);

                if (modalInfo) {
                    handleOpen(modalInfo.type, modalInfo.message);
                }
            } else {
                // edit post
                const deletedServerImages = serverUploadedImages.filter(
                    img => img.isDeleted
                );

                if (
                    deletedServerImages.length ===
                        serverUploadedImages.length &&
                    images.length === 0
                ) {
                    form.setError(
                        'images',
                        {
                            type: 'custom',
                            message:
                                'Musi być przynajmniej jedno zdjęcie w poście',
                        },
                        { shouldFocus: true }
                    );

                    return;
                }

                for (const img of serverUploadedImages) {
                    if (img.isDeleted) {
                        await deleteImage(img.id);
                    }
                }

                const modalInfo = await editPost(formData, editId);

                if (modalInfo) {
                    handleOpen(modalInfo.type, modalInfo.message);
                }
            }
        } catch (err) {
            console.error('Error submitting form:', err);
        } finally {
            setIsPending(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="py-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="py-4">
                            <FormLabel className="font-semibold">
                                Tytuł
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Wpisz tytuł posta"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="pb-4" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem className="py-4">
                            <FormLabel className="font-semibold">
                                Podsumowanie
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Wpisz podsumowanie posta"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className="py-4">
                            <FormLabel className="font-semibold">
                                Treść postu
                            </FormLabel>
                            <FormControl>
                                <TiptapEditor
                                    description={field.name}
                                    onChange={field.onChange}
                                    content={description}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <ImagesUploader
                    form={form}
                    edit={!!editId}
                    serverImages={serverImages}
                />
                <div className="w-full flex justify-end py-10 relative">
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="bg-green-600 hover:bg-green-400 float-end px-8 font-bold"
                    >
                        {isPending
                            ? editId
                                ? 'Aktualizowanie'
                                : 'Dodawanie...'
                            : editId
                            ? 'Zaktualizuj post'
                            : 'Dodaj post'}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
