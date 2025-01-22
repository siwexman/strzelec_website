import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const initUsername = process.env.INIT_USER_NAME;
    const initPassword = process.env.INIT_USER_PASSWROD;

    if (!initPassword || !initUsername) {
        console.error('No username or passwrod found!');
        return;
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            name: initUsername,
        },
    });

    if (!existingUser) {
        const hashedPassword = await hash(initPassword, 10);
        console.log(hashedPassword);

        await prisma.user.create({
            // TODO: create functionality to init this
            data: {
                name: initUsername,
                password: hashedPassword,
                role: 'Master',
            },
        });

        await prisma.counter.create({
            data: {
                lastResetDate: new Date().toISOString().split('T')[0],
            },
        });
        console.log('Initial user created');
    } else {
        console.log('User already exists');
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
