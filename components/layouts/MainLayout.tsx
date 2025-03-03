import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Modal from '../UI/Modal/Modal';
import Menu from '../Header/Menu';

export default function MainLayout(props: { children: ReactNode }) {
    return (
        <>
            <Modal />
            <Menu />
            <main>{props.children}</main>
            <Footer />
        </>
    );
}
