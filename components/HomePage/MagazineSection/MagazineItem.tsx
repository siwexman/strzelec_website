import { getMagazineLatest } from '@/store/action/magazine/getMagazine';
import Image from 'next/image';

export default async function MagazineItem() {
    const magazine = await getMagazineLatest();

    if (!magazine) {
        return;
    }
    console.log(magazine);
    const imgSrc = magazine.imgUrl;

    console.log(imgSrc);
    return (
        <div className="relative w-1/3">
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
