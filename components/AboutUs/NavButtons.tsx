import NavButton from './NavButton';

export default function NavButtons() {
    return (
        <div className="grid grid-cols-3 py-12">
            <NavButton sectionName="Strzelcy" sectionId="strzelcy" />
            <NavButton sectionName="Orlęta" sectionId="orleta" />
            <NavButton sectionName="Struktura" sectionId="struktura" />
        </div>
    );
}
