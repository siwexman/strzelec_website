import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { prisma } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        // maxAge: 2 * 60 * 60,
    },
    pages: {
        signIn: '/',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const dbUser = await prisma.user.findUnique({
                    where: {
                        id: parseInt(user.id),
                    },
                });
                token.id = dbUser?.id;
                token.name = dbUser?.name;
                token.role = dbUser?.role || 'Blogger';
            }

            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id as number;
            session.user.name = firstLetterToUpper(token.name) as string;
            session.user.role = token.role as string;

            return session;
        },
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(
                credentials: {
                    username?: string;
                    password?: string;
                },
                req
            ) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        name: credentials.username,
                    },
                });

                if (!user) {
                    console.log('User not found');
                    return null;
                }

                const passwordCorrect = await compare(
                    credentials.password,
                    user.password
                );

                console.log({ passwordCorrect });

                if (passwordCorrect) {
                    return {
                        id: user?.id,
                        username: user?.name,
                    };
                }

                console.log({ credentials });
                return null;
            },
        }),
    ],
};

function firstLetterToUpper(name: string | null | undefined) {
    if (!name) {
        return;
    }

    const firstLetter = name.charAt(0).toUpperCase();
    const newName = firstLetter + name.slice(1);

    return newName;
}
