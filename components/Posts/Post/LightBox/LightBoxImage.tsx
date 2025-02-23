'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import NextJsImage from './LightBox';
import Images from '../Images';

import { Image } from '@/types/imageFile';

export default function LightBoxImage({ images }: { images: Image[] }) {
    // const [open, setOpen] = useState(false);
    const [index, setIndex] = useState<number>(-1);

    const slides = images.map(image => ({
        src: image.url,
    }));

    return (
        <>
            <Images
                images={images}
                onClick={currentIndex => setIndex(currentIndex)}
            />

            <Lightbox
                plugins={[Counter, Thumbnails]}
                counter={{
                    container: { style: { top: 0, bottom: 'unset' } },
                }}
                // open={open}
                // close={() => setOpen(false)}
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
                render={{ slide: NextJsImage }}
            />
        </>
    );
}
