import NameDuty from './NameDuty';

import { NameDutyType } from './data';

export default function Contacts({
    namesDuties,
}: {
    namesDuties: NameDutyType[];
}) {
    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {namesDuties.map((nameDuty, i) => (
                <NameDuty key={i} nameDuty={nameDuty} />
            ))}
        </div>
    );
}
