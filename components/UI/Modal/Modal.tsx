'use client';

import { useModal } from '@/components/context/ModalContext';
import { motion, AnimatePresence } from 'framer-motion';

import CloseIcon from '@/components/UI/Icons/Close';
import Join from './Join';
import Login from './Login/Login';
import Confirm from './Confirm';
import ModalInfo from './Info/ModalInfo';

export default function Modal() {
    const { isOpen, handleClose, modalType, modalContent, handleConfirm } =
        useModal();

    if (!isOpen) {
        return null;
    }

    function handleSafeClose() {
        if (modalType !== 'login' && modalType !== 'join') {
            return;
        }

        handleClose();
    }

    return (
        <dialog
            onClick={handleSafeClose}
            className="bg-black05 w-full h-full fixed inset-0 z-[999] top-0 left-0 flex justify-center items-center"
        >
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="modal"
                        onClick={e => e.stopPropagation()}
                        className="bg-white p-6 mx-4 max-w-[500px] min-w-[250px] rounded-xl relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        <button
                            className={`absolute top-2 right-2 ${
                                modalType !== 'login' &&
                                modalType !== 'join' &&
                                'hidden'
                            }`}
                            onClick={handleClose}
                        >
                            <CloseIcon />
                        </button>
                        {modalType === 'join' && <Join />}
                        {modalType === 'login' && <Login />}
                        {modalType === 'confirm' && (
                            <Confirm
                                content={modalContent}
                                handleConfirm={handleConfirm}
                                handleClose={handleClose}
                            />
                        )}
                        {(modalType === 'correct' || modalType === 'error') && (
                            <ModalInfo
                                type={modalType}
                                content={modalContent}
                                handleModalClose={handleClose}
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </dialog>
    );
}
