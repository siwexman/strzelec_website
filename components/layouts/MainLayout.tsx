import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Modal from '../UI/Modal/Modal';

export default function MainLayout(props: { children: ReactNode }) {
    return (
        <>
            <Modal />
            <Header />
            <main>
                <div className="h-48"></div>
                {props.children}
            </main>
            <Footer />
        </>
    );
}
