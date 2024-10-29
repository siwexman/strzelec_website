'use client';
import { createContext, useContext, useState } from 'react';

interface ModalContextType {
    isOpen: boolean;
    modalContent: string;
    handleOpen: (type: string) => void;
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
    const [modalContent, setModalContent] = useState('');

    function handleOpen(content: string) {
        setModalContent(content);
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
        setModalContent('');
    }

    return (
        <ModalContext.Provider
            value={{ isOpen, modalContent, handleOpen, handleClose }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
