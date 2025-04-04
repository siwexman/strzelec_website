'use client';

import { Power } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function Logout() {
    return (
        <button
            onClick={() => signOut({ callbackUrl: 'http://192.168.1.18:3000' })}
        >
            <Power />
        </button>
    );
}
