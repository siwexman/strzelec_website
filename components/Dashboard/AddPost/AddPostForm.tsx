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
import { prisma } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
import { savePost } from '@/store/action/posts';

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
        }

        const formData = {
            ...values,
            // images,
        };
        console.log(formData);

        const { user } = await getSession();

        savePost(formData, user.id);
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
