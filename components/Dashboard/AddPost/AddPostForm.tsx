import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import TiptapEditor from '@/components/Dashboard/TipTapEditor/TiptapEditor';
import { Button } from '@/components/UI/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/UI/form';
import { Input } from '@/components/UI/input';
import ImagesUploader from '@/components/Dashboard/AddPost/ImagesUploader';

import { useForm } from 'react-hook-form';
import { userFormSchema } from '@/types/formSchema';
import { useImageContext } from '@/components/context/ImageContext';
import uploadPost from '@/store/action/upload/uploadPost';
import { useModal } from '@/components/context/ModalContext';

export default function AddPostForm() {
    const { handleOpen } = useModal();
    const { images } = useImageContext();

    const form = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        mode: 'onChange',
        defaultValues: {
            title: '',
            summary: '',
            description: '',
            images: [],
        },
    });

    async function handleSubmit(values: z.infer<typeof userFormSchema>) {
        if (images.length === 0) {
            form.setError('images', {
                type: 'custom',
                message: 'Nie przesłano żadnych zdjęć',
            });

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

            const modalInfo = await uploadPost(formData);

            if (true) {
                handleOpen('correct', 'Post dodany');
            }
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    }
    function open() {
        handleOpen('error', 'Post został dodany!');
    }

    return (
        <Form {...form}>
            <h2 onClick={open}>open</h2>
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
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <ImagesUploader form={form} />
                <div className="w-full flex justify-end py-10 relative">
                    <Button
                        type="submit"
                        className="bg-green-600 hover:bg-green-400 float-end px-8 font-bold"
                    >
                        Dodaj post
                    </Button>
                </div>
            </form>
        </Form>
    );
}
