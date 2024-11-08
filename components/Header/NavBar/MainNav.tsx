import { getServerSession } from 'next-auth';
import NavItem from './NavItem';
import { authOptions } from '@/config/auth';

export default async function MainNav() {
    const session = getServerSession(authOptions);

    session.then(res => console.log(res?.user));

    return (
        <nav className="text-center flex gap-8 font-semibold px-4">
            <NavItem link="aktualnosci">Aktualności</NavItem>
            <NavItem link="o-nas">O nas</NavItem>
            <NavItem link="kontakt">Kontakt</NavItem>
        </nav>
    );
}
