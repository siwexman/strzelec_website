'use client';

import CloseIcon from '@/components/UI/Icons/Close';

export default function DeleteItem({
    handleClick,
}: {
    handleClick: () => void;
}) {
    return (
        <div
            onClick={handleClick}
            className="absolute top-0 right-0 z-10 bg-red-600 rounded-md cursor-pointer"
        >
            <CloseIcon />
        </div>
    );
}
