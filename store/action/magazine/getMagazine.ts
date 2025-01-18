import { prisma } from '@/lib/prisma';

export async function getMagazine(issue: string) {
    const magazine = await prisma.magazine.findFirst({
        where: { issue: issue },
    });

    if (!magazine) {
        return;
    }

    return magazine;
}

export async function getMagazineLatest() {
    const magazine = await prisma.magazine.findFirst();

    return magazine;
}
