'use client';

import CloseIcon from '@/components/UI/Icons/Close';
import UndoIcon from '../Icons/Undo';

export default function DeleteItem({
    handleClick,
    isUndo,
}: {
    handleClick: () => void;
    isUndo?: boolean;
}) {
    const classUndo = isUndo ? 'bg-amber-600' : 'bg-red-600';

    return (
        <div
            onClick={handleClick}
            className={`absolute top-0 right-0 z-10 rounded-md cursor-pointer ${classUndo}`}
        >
            {isUndo ? <UndoIcon /> : <CloseIcon />}
        </div>
    );
}
