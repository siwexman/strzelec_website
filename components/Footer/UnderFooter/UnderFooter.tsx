import Link from 'next/link';

import FacebookIcon from '../../Icons/Facebook';
import YoutubeIcon from '../../Icons/Youtube';
import UserLogged from './UserLogged';

export default function UnderFooter() {
    return (
        <div className="flex justify-between px-4 py-2">
            <UserLogged />
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
