'use client';

import { useModal } from '@/components/context/ModalContext';

import CloseIcon from '@/components/Icons/Close';
import Join from '../Join';
import Login from '../Login/Login';
import ModalMessage from './Info/ModalMessage';

export default function Modal() {
    const { isOpen, handleClose, modalType, modalContent } = useModal();

    if (!isOpen) {
        return null;
    }

    function handleSafeClose() {
        if (modalType !== 'login') {
            return;
        }

        handleClose();
    }

    return (
        <dialog
            onClick={handleSafeClose}
            className="bg-black05 w-full h-full fixed z-20 top-0 left-0 flex justify-center items-center"
        >
            <div
                onClick={e => e.stopPropagation()}
                className="bg-white p-6 max-w-[500px] min-w-[350px] rounded-xl relative"
            >
                {/* <div className="w-full flex justify-end"> */}
                <button
                    className={`absolute top-2 right-2 ${
                        modalType !== 'login' && 'hidden'
                    }`}
                    onClick={handleClose}
                >
                    <CloseIcon />
                </button>
                {/* </div> */}
                {/* {modalType === 'join' && <Join />} */}
                {modalType === 'login' ? (
                    <Login />
                ) : (
                    <ModalMessage content={modalContent} type={modalType} />
                )}
                {/* {modalType === 'correct' && <CorrectMessage/>}
                {modalType === 'error' && <ErrorMessage/>} */}
            </div>
        </dialog>
    );
}
