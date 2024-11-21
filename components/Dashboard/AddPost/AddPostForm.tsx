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
import { getServerSession } from 'next-auth';
import { getSessionUser } from '@/store/action/session';

export default function AddPostForm() {
    const { images } = useImageContext();

    const form = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        mode: 'onChange',
        defaultValues: {
            title: 'tytuł tutaj',
            summary: 'podsumowanie tutaj',
            description: 'a tu tresc posta',
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

            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const result = await res.json();
                console.log('Post successfully submitted:', result);
            } else {
                console.error('Error uploading post:', res.statusText);
            }

            console.log(res);
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Wpisz tytuł posta"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Podsumowanie</FormLabel>
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
                        <FormItem>
                            <FormLabel>Description</FormLabel>
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
                <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-400 float-end"
                >
                    Submit
                </Button>
            </form>
        </Form>
    );
}
