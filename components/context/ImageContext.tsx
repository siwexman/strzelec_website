import { createContext, useCallback, useContext, useState } from 'react';
import { ImageFile, ImageWithDeleted } from '@/types/imageFile';

interface ImageContextProps {
    images: ImageFile[];
    serverUploadedImages: ImageWithDeleted[];
    addImages: (newImages: ImageFile[]) => void;
    removeImage: (name: string) => void;
    setServerImages: (images: ImageWithDeleted[]) => void;
    togglePropertyServerImage: (id: number) => void;
}

const ImageContext = createContext<ImageContextProps | undefined>(undefined);

export function ImageProvider(props: { children: JSX.Element }) {
    const [images, setImages] = useState<ImageFile[]>([]);
    const [serverUploadedImages, setServerUploadedImages] = useState<
        ImageWithDeleted[]
    >([]);

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

    // server Images
    const setServerImages = useCallback((images: ImageWithDeleted[]) => {
        setServerUploadedImages(images);
    }, []);

    function togglePropertyServerImage(id: number) {
        setServerUploadedImages(prevState => {
            const updatedImages = prevState.map(img =>
                img.id === id ? { ...img, isDeleted: !img.isDeleted } : img
            );

            return updatedImages;
        });
    }

    return (
        <ImageContext.Provider
            value={{
                images,
                serverUploadedImages,
                addImages,
                removeImage,
                setServerImages,
                togglePropertyServerImage,
            }}
        >
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
