'use client';

import Link from 'next/link';

import UserIcon from '../Icons/User';
import FacebookIcon from '../Icons/Facebook';
import YoutubeIcon from '../Icons/Youtube';
import Button from '../UI/Button';

export default function UnderFooter() {
    return (
        <div className="flex justify-between px-4 py-2">
            <div className="flex gap-1">
                <Button onClick={() => console.log('hello world')}>
                    <UserIcon />
                </Button>
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
