import { NextResponse } from 'next/server';
import { getSession } from './store/actions/login';

export async function middleware(request: { url: string | URL | undefined }) {
    const session = await getSession();
    const user = session.isLoggedIn;

    if (!user) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard', '/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
