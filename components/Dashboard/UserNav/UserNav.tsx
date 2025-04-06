import Link from 'next/link';

import { getSessionUser } from '@/store/action/session';

import Logout from '@/components/UI/Modal/Login/Logout';
import { Home, UserCircle } from 'lucide-react';

export default async function UserNav() {
    const user = await getSessionUser();

    if (!user) {
        return;
    }

    return (
        <div className="w-full absolute top-0 bg-cyan-900 text-white px-2">
            <div className="max-w-maxWidth mx-auto flex justify-between">
                <div className="flex">
                    <div className="my-auto">
                        <UserCircle width={20} />
                    </div>
                    <p className="my-auto px-4">{user.name}</p>
                    <a href={'/'} className="flex mx-4">
                        <Home className="my-auto" />
                    </a>
                </div>
                <div className="flex gap-4">
                    <Link
                        href={'/dashboard'}
                        className="my-auto text-sm text-center md:text-md p-2"
                    >
                        Panel Administracyjny
                    </Link>
                    <Logout />
                </div>
            </div>
        </div>
    );
}
