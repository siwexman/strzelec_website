import { prisma } from '@/lib/prisma';

export async function getAllMagazines() {
    const magazines = await prisma.magazine.findMany({
        orderBy: {
            issue: 'desc',
        },
    });

    if (!magazines) {
        return;
    }

    return magazines;
}
