import NavItem from './NavItem';

export default function MainNav() {
    return (
        <nav className="text-center flex gap-8 font-semibold px-4">
            <NavItem link="aktualnosci">Aktualności</NavItem>
            <NavItem link="o-nas">O nas</NavItem>
            <NavItem link="kontakt">Kontakt</NavItem>
        </nav>
    );
}
