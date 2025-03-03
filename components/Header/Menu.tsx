'use client';

import { useState } from 'react';
import Header from '../Header/Header';
import MobileMenu from './MobileMenu/MobileMenu';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MobileMenu isOpen={isOpen} handleClose={() => setIsOpen(false)} />
            <Header handleOpen={() => setIsOpen(true)} />
        </>
    );
}
