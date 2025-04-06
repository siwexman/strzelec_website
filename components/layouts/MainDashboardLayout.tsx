import { ReactNode } from 'react';
import UserNav from '../Dashboard/UserNav/UserNav';
import { ModalProvider } from '../context/ModalContext';
import Modal from '../UI/Modal/Modal';

export default function MainDashboardLayout(props: { children: ReactNode }) {
    return (
        <ModalProvider>
            <main>
                <Modal />
                <UserNav />
                <div className="mt-20">
                    <div className="max-w-maxWidthSm mx-auto px-4 md:px-8 pt-8 w-full">
                        {props.children}
                    </div>
                </div>
            </main>
        </ModalProvider>
    );
}
