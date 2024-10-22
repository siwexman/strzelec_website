import InfoButton from './InfoButton';

import EnvelopeIcon from '../../Icons/Envelope';
import MapPinIcon from '../../Icons/MapPin';
import MoneyCheckIcon from '../../Icons/Bank';
import WatchIcon from '../../Icons/Watch';

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
