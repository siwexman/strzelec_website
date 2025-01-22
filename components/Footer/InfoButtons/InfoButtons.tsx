'use client';

import { useState } from 'react';

import InfoButton from './InfoButton';

import EnvelopeIcon from '../../UI/Icons/Envelope';
import MapPinIcon from '../../UI/Icons/MapPin';
import MoneyCheckIcon from '../../UI/Icons/Bank';
import WatchIcon from '../../UI/Icons/Watch';

export default function InfoButtons() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const buttons = [
        { icon: <EnvelopeIcon />, content: <p>strzelec@op.pl</p> },
        {
            icon: <MapPinIcon />,
            content: (
                <>
                    <p className="text-sm">ul. Jagiellońska 6</p>
                    <p className="text-sm">35-025 Rzeszów</p>
                </>
            ),
        },
        {
            icon: <MoneyCheckIcon />,
            content: (
                <>
                    <p className="text-sm">57 8642 1126 2012 1122 4749 0001</p>
                    <p className="text-xs">(numer konta bankowego)</p>
                </>
            ),
        },
        {
            icon: <WatchIcon />,
            content: (
                <>
                    <p className="text-sm">Biuro oraz Świetlica</p>
                    <p className="text-sm">czynne codziennie 16:00 - 19:00</p>
                </>
            ),
        },
    ];

    return (
        <div className="my-auto flex gap-4">
            {buttons.map((button, index) => (
                <InfoButton
                    key={index}
                    icon={button.icon}
                    isOpen={openIndex === index}
                    handleClick={() =>
                        setOpenIndex(prev => (prev === index ? null : index))
                    }
                >
                    {button.content}
                </InfoButton>
            ))}
        </div>
    );
}
