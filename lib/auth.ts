import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { prisma } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 2 * 60 * 60,
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
            session.user.id = token.id;
            session.user.name = firstLetterToUpper(token.name);
            session.user.role = token.role;

            console.log('session', session);
            
            return session;
        },
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials, req) {
                const response = await prisma.user.findUnique({
                    where: {
                        name: credentials?.username,
                    },
                });
                const user = response;

                const passwordCorrect = await compare(
                    credentials?.password || '',
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
