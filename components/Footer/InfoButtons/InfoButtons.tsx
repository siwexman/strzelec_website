import InfoButton from './InfoButton';

import EnvelopeIcon from '../../UI/Icons/Envelope';
import MapPinIcon from '../../UI/Icons/MapPin';
import MoneyCheckIcon from '../../UI/Icons/Bank';
import WatchIcon from '../../UI/Icons/Watch';

export default function InfoButtons() {
    return (
        <div className="my-auto flex gap-1">
            <InfoButton>
                <EnvelopeIcon />
            </InfoButton>
            <InfoButton>
                <MapPinIcon />
            </InfoButton>
            <InfoButton>
                <MoneyCheckIcon />
            </InfoButton>
            <InfoButton>
                <WatchIcon />
            </InfoButton>
        </div>
    );
}
