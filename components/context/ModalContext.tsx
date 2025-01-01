'use client';

import { createContext, useContext, useState } from 'react';

interface ModalContextType {
    isOpen: boolean;
    modalType: string;
    modalContent: string;
    handleOpen: (type: string, message: string) => void;
    handleClose: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }

    return context;
}

export function ModalProvider(props: { children: JSX.Element }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [modalContent, setModalContent] = useState('');

    function handleOpen(content: string, message = '') {
        setModalType(content);
        setModalContent(message);
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
        setModalType('');
    }

    return (
        <ModalContext.Provider
            value={{ isOpen, modalType, modalContent, handleOpen, handleClose }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
