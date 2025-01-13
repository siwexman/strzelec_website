'use client';

export default function ActionButton({
    content,
    action,
    handleAction,
}: {
    content: string;
    action: 'delete' | 'read' | 'edit';
    handleAction?: () => void;
}) {
    const colorClasses = {
        delete: 'border-red-600 text-red-600 hover:bg-red-600',
        read: 'border-blue-600 text-blue-600 hover:bg-blue-600',
        edit: 'border-amber-600 text-amber-600 hover:bg-amber-600',
    };

    return (
        <button
            onClick={handleAction}
            className={`${colorClasses[action]} py-2 px-4 border-2 font-semibold rounded hover:text-white transition-all`}
        >
            {content}
        </button>
    );
}
