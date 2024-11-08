import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();
        // TODO: validate username, password

        const hashedPassword = await hash(password, 10);

        const response = await prisma.user.create({
            data: {
                name: username,
                password: hashedPassword,
            },
        });

        console.log({ response });
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ message: 'success' });
}
