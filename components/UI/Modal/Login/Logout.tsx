'use client';

import { Power } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function Logout() {
    return (
        <button onClick={() => signOut()}>
            <Power />
        </button>
    );
}
