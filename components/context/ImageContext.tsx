import { createContext, useContext, useState } from 'react';
import { ImageFile } from '@/types/imageFile';

interface ImageContextProps {
    images: ImageFile[];
    addImages: (newImages: ImageFile[]) => void;
    removeImage: (name: string) => void;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

export function ImageProvider(props: { children: JSX.Element }) {
    const [images, setImages] = useState<ImageFile[]>([]);

    function addImages(images: ImageFile[]) {
        setImages(prevState => {
            const filtered = images.filter(
                img2 =>
                    !prevState.some(img1 => img1.base.name === img2.base.name)
            );
            const result = [...prevState, ...filtered];

            return result;
        });
    }

    function removeImage(name: string) {
        setImages(prevState =>
            prevState.filter(image => image.base.name !== name)
        );
    }

    return (
        <ImageContext.Provider value={{ images, addImages, removeImage }}>
            {props.children}
        </ImageContext.Provider>
    );
}

export function useImageContext() {
    const context = useContext(ImageContext);

    if (!context) {
        throw new Error('useImageContext must be used within an ImageProvider');
    }

    return context;
}
