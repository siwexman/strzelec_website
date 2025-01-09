import Link from 'next/link';

import Logout from '@/components/UI/Modal/Login/Logout';
import UserLogo from './UserLogo';

import { getSessionUser } from '@/store/action/session';
import HomeIcon from '@/components/UI/Icons/Home';

export default async function UserNav() {
    const user = await getSessionUser();

    if (!user) {
        return;
    }

    return (
        <div className="w-full absolute top-0 bg-cyan-900 text-white p-2">
            <div className="max-w-maxWidth mx-auto flex justify-between">
                <div className="flex">
                    <UserLogo />
                    <p className="text-lg my-auto px-4">{user.name}</p>
                    <Link href={'/'} className="flex mx-4">
                        <HomeIcon className="my-auto" />
                    </Link>
                </div>
                <div className="flex gap-4">
                    <Link href={'/dashboard'} className="my-auto text-md p-2">
                        Panel Administracyjny
                    </Link>
                    <Logout />
                </div>
            </div>
        </div>
    );
}
