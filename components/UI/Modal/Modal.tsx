'use client';

import { useModal } from '@/components/context/ModalContext';
import CloseIcon from '@/components/Icons/Close';
import Join from '../Join';
import Login from '../Login/Login';

export default function Modal() {
    const { isOpen, handleClose, modalContent } = useModal();

    if (!isOpen) {
        return null;
    }

    return (
        <dialog
            onClick={handleClose}
            className="bg-black05 w-full h-full fixed z-20 top-0 left-0 flex justify-center items-center"
        >
            <div
                onClick={e => e.stopPropagation()}
                className="bg-white p-6 max-w-[500px] min-w-[350px] rounded-xl relative"
            >
                {/* <div className="w-full flex justify-end"> */}
                <button
                    className="absolute top-2 right-2"
                    onClick={handleClose}
                >
                    <CloseIcon />
                </button>
                {/* </div> */}
                {modalContent === 'join' && <Join />}
                {modalContent === 'login' && <Login />}
            </div>
        </dialog>
    );
}
