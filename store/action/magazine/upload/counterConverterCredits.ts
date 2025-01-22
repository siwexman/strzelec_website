'use server';

import { prisma } from '@/lib/prisma';

export async function getCounterConverter() {
    const counter = await prisma.counter.findFirst();
    const today = new Date().toISOString().split('T')[0];

    if (!counter) {
        return;
    }

    if (counter.lastResetDate !== today) {
        const updatedCounter = await prisma.counter.update({
            where: {
                id: counter.id,
            },
            data: {
                counter: 10,
                lastResetDate: today,
            },
        });

        return updatedCounter;
    } else {
        return counter;
    }
}

export async function decrementCounterConverter() {
    const counter = await prisma.counter.findFirst();

    if (!counter) {
        return;
    }

    const updatedCounter = await prisma.counter.update({
        where: {
            id: counter.id,
        },
        data: {
            counter: { decrement: 1 },
        },
    });

    return updatedCounter;
}
