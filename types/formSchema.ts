import { z } from 'zod';

const fileSizeLimit = 5 * 1024 * 1024; // 5MB
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const imageSchema = z
    .object({
        name: z.string(),
        size: z.number().positive(),
        type: z.string().refine(type => imageMimeTypes.includes(type), {
            message: 'Plik musi być zdjęciem (png, jpeg, jpg).',
        }),
    })
    .refine(file => file.size < fileSizeLimit, {
        message: 'Plik za duży! Maksymalnie 5MB',
    });

export const userFormSchema = z.object({
    title: z.string().min(3, { message: 'Tytuł jest za krótki' }),
    summary: z.string().min(5, { message: 'Podsumowanie jest za krótkie' }),
    description: z.string().min(5, { message: 'Post jest za krótki' }),
    images: z.any(),
});