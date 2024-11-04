'use server';

import { sessionOptions, SessionData, defaultSession } from '@/lib/session';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const user = {
    username: 'karol',
    password: '12345',
};

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

    if (login !== user.username && password !== user.password) {
        return { error: 'Wrong username or password' };
    }

    session.userId = '1';
    session.username = login;
    session.isLoggedIn = true;

    await session.save();

    redirect('/dashboard');
}

export async function logout(isRedirected: boolean = true) {
    const session = await getSession();

    session.destroy();

    if (isRedirected) {
        redirect('/');
    }
}
