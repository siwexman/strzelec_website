'use client';

import { createContext, useContext, useState } from 'react';

interface ModalContextType {
    isOpen: boolean;
    modalType: string;
    modalContent: string;
    handleOpen: (
        type: string,
        message?: string,
        onConfirm?: () => void
    ) => void;
    handleClose: () => void;
    handleConfirm: () => void;
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
    const [confirmCallback, setConfirmCallback] = useState<(() => void) | null>(
        null
    );

    function handleOpen(
        content: string,
        message: string = '',
        onConfirm?: () => void
    ) {
        document.querySelector('body')?.style.setProperty('overflow', 'hidden');

        setModalType(content);
        setModalContent(message);
        setConfirmCallback(() => onConfirm || null);
        setIsOpen(true);
    }

    function handleClose() {
        document.querySelector('body')?.style.setProperty('overflow', 'auto');

        setIsOpen(false);
        setModalType('');
    }

    function handleConfirm() {
        if (confirmCallback) {
            confirmCallback();
        }
        handleClose();
    }

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                modalType,
                modalContent,
                handleOpen,
                handleClose,
                handleConfirm,
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
