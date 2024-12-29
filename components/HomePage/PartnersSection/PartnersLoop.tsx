import PartnersRow from './PartnersRow';
import { Partners } from '@/store/data/partners';

export default function PartnersLoop({ images }: Partners) {
    return (
        <div className="max-w-maxWidth mx-auto overflow-hidden flex relative">
            <div className="h-full w-12 absolute z-10 linear-gradient-white-left"></div>
            <PartnersRow images={images} />
            <PartnersRow images={images} />
            <div className="h-full right-0 w-12 absolute z-10 linear-gradient-white-right"></div>
        </div>
    );
}
