import Image, { StaticImageData } from 'next/image';

export default function Section({
    id,
    name,
    img,
    description,
    days,
    hours,
    phoneNumbers,
}: {
    id: string;
    name: string;
    img: StaticImageData;
    description: string;
    days: string;
    hours: string[];
    phoneNumbers: string[];
}) {
    return (
        <div id={id} className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
            <div className="relative flex h-full p-4">
                <div className="my-auto w-full h-[250px] relative">
                    <Image
                        src={img}
                        alt="image"
                        fill
                        sizes="50wv"
                        className="rounded-xl my-auto"
                    />
                </div>
            </div>
            <div className="py-8 md:flex">
                <div className="md:my-auto p-2">
                    <p className=" text-center md:text-left">
                        <b className="text-lg">{name}</b> {description}
                    </p>
                    <p className="text-sm py-4">
                        Zbiórki odbywają się{' '}
                        {days === 'wtorki' ? `we ${days}` : `w ${days}`} od
                        godz. {hours[0]} do godz. {hours[1]} <br />
                        Kontakt: tel.{' '}
                        <a href={`tel:+48${phoneNumbers[0].replace(' ', '')}`}>
                            {phoneNumbers[0]}
                        </a>
                        ,{' '}
                        <a href={`tel:+48${phoneNumbers[1].replace(' ', '')}`}>
                            {phoneNumbers[1]}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
