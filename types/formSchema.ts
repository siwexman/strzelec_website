import { z } from 'zod';

const imgSizeLimit = 5 * 1024 * 1024; // 5MB
const magazineSizeLimit = 15 * 1024 * 1024; // 15MB
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const imageSchema = z
    .object({
        name: z.string(),
        size: z.number().positive(),
        type: z.string().refine(type => imageMimeTypes.includes(type), {
            message: 'Plik musi być zdjęciem (png, jpeg, jpg).',
        }),
    })
    .refine(file => file.size < imgSizeLimit, {
        message: 'Plik za duży! Maksymalnie 5MB',
    });

export const userFormSchema = z.object({
    title: z
        .string()
        .min(5, { message: 'Tytuł jest za krótki' })
        .max(60, { message: 'Tytuł jest za długi' }),
    summary: z
        .string()
        .min(5, { message: 'Podsumowanie jest za krótkie' })
        .max(250, { message: 'Podsumowanie jest za długie' }),
    description: z.string().min(5, { message: 'Post jest za krótki' }),
    images: z.any(),
});

export const magazineFormSchema = z.object({
    magazine: z
        .instanceof(File, { message: 'Nie zamieszczono pliku' })
        .refine(
            file => file.size < magazineSizeLimit,
            'Plik jest za duży! Maksymalnie 15MB'
        )
        .refine(file => file.type === 'application/pdf', 'Plik musi być PDF'),
    issue: z
        .object({
            year: z.string().regex(/^\d{4}$/, 'Rok musi mieć 4 cyfry'),
            number: z.string().regex(/^\d{2}$/, 'Numer musi mieć 2 cyfry'),
        })
        .transform(data => ({
            ...data,
            combined: `${data.year}/${data.number}`,
        })),
});

export type MagazineType = z.infer<typeof magazineFormSchema>;
