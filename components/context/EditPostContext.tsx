import { ImageWithDeleted } from '@/types/imageFile';
import { createContext, useContext, useEffect, useState } from 'react';

interface EditContextProps {
    images: ImageWithDeleted[];
    addIsDeletedProperty: (id: number) => void;
}

const EditPostContext = createContext<EditContextProps | undefined>(undefined);

export function EditPostProvider({ children }: { children: JSX.Element }) {
    const [images, setImages] = useState<ImageWithDeleted[]>([]);

    useEffect(() => {});

    function addIsDeletedProperty(id: number) {
        images.forEach(img => {
            if (img.id === id) {
                img.isDeleted = !img.isDeleted;
            }
        });

        setImages(images);
    }

    return (
        <EditPostContext.Provider value={{ images, addIsDeletedProperty }}>
            {children}
        </EditPostContext.Provider>
    );
}

export function useEditPostContext() {
    const context = useContext(EditPostContext);

    if (!context) {
        throw new Error(
            'UseEditPostContext must be used within an ImageProvider'
        );
    }

    return context;
}
