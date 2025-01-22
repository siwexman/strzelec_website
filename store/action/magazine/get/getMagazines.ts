import { prisma } from '@/lib/prisma';

export async function getAllMagazines() {
    const magazines = await prisma.magazine.findMany();

    if (!magazines) {
        return;
    }

    return magazines;
}
