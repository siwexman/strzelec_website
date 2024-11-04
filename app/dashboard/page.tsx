'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
    const pathname = usePathname();

    useEffect(() => {
        console.log('changed', pathname);
    }, [pathname]);

    return <div>Dashboard</div>;
}
