import { getMagazineLatest } from '@/store/action/magazine/get/getMagazine';
import Image from 'next/image';

export default async function MagazineItem({ cssClass }: { cssClass: string }) {
    const magazine = await getMagazineLatest();

    if (!magazine) {
        return;
    }

    const imgSrc = magazine.imgUrl;

    return (
        <div className={`relative w-48 h-64 mx-auto ${cssClass}`}>
            <Image
                className="rounded"
                src={imgSrc}
                alt="Okładka czasopisma"
                fill
                sizes="50vw"
            />
        </div>
    );
}
