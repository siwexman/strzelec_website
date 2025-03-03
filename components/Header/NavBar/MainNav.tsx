import NavItem from './NavItem';

export default function MainNav() {
    return (
        <nav className="text-center relative font-semibold px-4 hidden md:block">
            <div className="gap-8 h-full flex">
                <NavItem link="/aktualnosci">Aktualności</NavItem>
                <NavItem link="/o-nas">O nas</NavItem>
                <NavItem link="/kontakt">Kontakt</NavItem>
            </div>
        </nav>
    );
}
