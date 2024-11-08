import Link from 'next/link';

import FacebookIcon from '../../Icons/Facebook';
import YoutubeIcon from '../../Icons/Youtube';
import LoginButton from './LoginButton';
import { getSessionUser } from '@/store/action/session';

export default async function UnderFooter() {
    const user = await getSessionUser();

    return (
        <div className="flex justify-between px-4 py-2">
            <div className="flex gap-1">
                {!user && <LoginButton />}
                <p className="text-sm my-auto">
                    Zrealizował{' '}
                    <a href="" className="font-semibold">
                        Karol Strączek
                    </a>
                </p>
            </div>
            <div className="flex gap-4 px-2">
                <Link href={''}>
                    <FacebookIcon />
                </Link>
                <Link href={''}>
                    <YoutubeIcon />
                </Link>
            </div>
        </div>
    );
}
