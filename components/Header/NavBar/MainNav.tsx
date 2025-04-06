import FacebookIcon from '@/components/UI/Icons/Facebook';
import NavItem from './NavItem';
import YoutubeIcon from '@/components/UI/Icons/Youtube';
import Tax from '@/components/HomePage/GiveTax/Tax';

export default function MainNav() {
    return (
        <nav className="text-center relative font-semibold px-4 hidden md:block">
            <div className="gap-8 h-full flex">
                <NavItem link="/wolontariat">Wolontariat</NavItem>
                <NavItem link="/aktualnosci">Aktualności</NavItem>
                <NavItem link="/o-nas">O nas</NavItem>
                <NavItem link="/kontakt">Kontakt</NavItem>
                <div className="flex gap-2">
                    <NavItem
                        link={
                            'https://www.facebook.com/profile.php?id=100071100844013&locale=pl_PL'
                        }
                    >
                        <FacebookIcon />
                    </NavItem>
                    <NavItem link={'https://www.youtube.com/@JS2021Rzeszow'}>
                        <YoutubeIcon />
                    </NavItem>
                </div>
                <Tax />
            </div>
        </nav>
    );
}
