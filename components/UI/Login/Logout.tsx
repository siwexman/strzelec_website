'use client';

import PowerOffIcon from '@/components/Icons/PowerOff';
import { signOut } from 'next-auth/react';

export default function Logout() {
    return (
        <button onClick={() => signOut()}>
            <PowerOffIcon />
        </button>
    );
}
