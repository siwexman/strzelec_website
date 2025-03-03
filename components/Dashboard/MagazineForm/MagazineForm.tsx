'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useModal } from '@/components/context/ModalContext';
import { magazineFormSchema, MagazineType } from '@/types/formSchema';
import { uploadMagazine } from '@/store/action/magazine/upload/uploadMagazine';

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

export default function MagazineForm() {
    const { handleOpen } = useModal();
    const [isPending, setIsPending] = useState(false);

    const form = useForm<MagazineType>({
        resolver: zodResolver(magazineFormSchema),
        mode: 'onChange',
        defaultValues: {
            issue: {
                year: '',
                number: '',
            },
        },
    });

    async function handleSubmit(values: MagazineType) {
        setIsPending(true);
        try {
            const arrayBuffer = await values.magazine.arrayBuffer();
            const uint8Array = new Uint8Array(arrayBuffer);

            const modalInfo = await uploadMagazine(
                uint8Array,
                values.magazine.name,
                values.issue.combined
            );
            console.log(modalInfo);

            if (modalInfo) {
                handleOpen(modalInfo.type, modalInfo.message);
            }
        } catch (error) {
            handleOpen('error', (error as Error).message);
        } finally {
            setIsPending(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="py-4 relative"
            >
                <FormField
                    control={form.control}
                    name="magazine"
                    render={({ field }) => (
                        <FormItem className="py-2 w-1/2 mx-auto">
                            <FormLabel>Czasopismo</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={e =>
                                        field.onChange(e.target.files?.[0])
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormLabel>Numer</FormLabel>
                <div className="w-2/3 mx-auto">
                    <div className="flex justify-center">
                        <FormField
                            control={form.control}
                            name="issue.year"
                            render={({ field }) => (
                                <FormItem className="py-2 pb-4 relative">
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Rok"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="absolute left-2" />
                                </FormItem>
                            )}
                        />
                        <p className="my-auto p-2">/</p>
                        <FormField
                            control={form.control}
                            name="issue.number"
                            render={({ field }) => (
                                <FormItem className="py-2 pb-4 relative">
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Numer"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="absolute left-2" />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button disabled={isPending} className="mt-8 py-4">
                    {isPending ? 'Dodaje...' : 'Dodaj czasopismo'}
                </Button>
            </form>
        </Form>
    );
}
