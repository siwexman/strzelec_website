'use server';

import { sessionOptions, SessionData, defaultSession } from '@/lib/session';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const username = 'karol';
const password = '12345';

export async function getSession() {
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions
    );

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    return session;
}

export async function login(
    prevState: { error: undefined | string },
    formData: FormData
) {
    const session = await getSession();

    const login = formData.get('login') as string;
    const password = formData.get('password') as string;

    // TODO db user

    if (login !== username) {
        return { error: 'Wrong username' };
    }

    session.userId = '1';
    session.username = login;

    await session.save();

    redirect('/dashboard');
}

export async function logout() {
    const session = await getSession();

    session.destroy();
    redirect('/');
}
