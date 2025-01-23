import { getMagazineLatest } from '@/store/action/magazine/get/getMagazine';
import Image from 'next/image';

export default async function MagazineItem() {
    const magazine = await getMagazineLatest();

    if (!magazine) {
        return;
    }

    const imgSrc = magazine.imgUrl;

    return (
        <div className="relative w-1/4">
            <Image
                className="rounded"
                src={imgSrc}
                alt="Okładka czasopisma"
                fill
                sizes="10vw"
            />
        </div>
    );
}
