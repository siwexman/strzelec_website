import { NameDutyType } from './data';

export default function NameDuty({ nameDuty }: { nameDuty: NameDutyType }) {
    return (
        <div className="p-2">
            <div className="bg-slate-200 p-2 rounded-sm">
                <h4 className="text-lg">{nameDuty.rank}</h4>
                <p>{nameDuty.name}</p>
                {nameDuty.phoneNumber && (
                    <p>
                        tel.{' '}
                        <a
                            href={`tel:+48${nameDuty.phoneNumber.replace(
                                ' ',
                                ''
                            )}`}
                        >
                            {nameDuty.phoneNumber}
                        </a>
                    </p>
                )}
                <p>
                    e-mail:{' '}
                    <a href={`mailto:${nameDuty.email}`}>{nameDuty.email}</a>
                </p>
            </div>
        </div>
    );
}
