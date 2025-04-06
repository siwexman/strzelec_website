import Link from 'next/link';

import FacebookIcon from '../../UI/Icons/Facebook';
import YoutubeIcon from '../../UI/Icons/Youtube';
import UserLogged from './UserLogged';

export default function UnderFooter() {
    return (
        <div className="flex justify-between px-4 py-2">
            <UserLogged />
            <div className="flex gap-4 px-2">
                <Link
                    href={
                        'https://www.facebook.com/profile.php?id=100071100844013&locale=pl_PL'
                    }
                >
                    <FacebookIcon />
                </Link>
                <Link href={'https://www.youtube.com/@JS2021Rzeszow'}>
                    <YoutubeIcon />
                </Link>
            </div>
        </div>
    );
}
