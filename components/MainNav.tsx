import NavItem from './NavItem';

export default function MainNav() {
    return (
        <div className="text-center flex gap-8 font-semibold">
            <NavItem text="Aktualności" />
            <NavItem text="O nas" />
            <NavItem text="Kontakt" />
        </div>
    );
}
