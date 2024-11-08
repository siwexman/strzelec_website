import { getServerSession } from 'next-auth';

import { authOptions } from '@/config/auth';

export async function getSessionUser() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return;
    }

    return session.user;
}
