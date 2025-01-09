'use client';

export default function ActionButton({
    content,
    color,
}: {
    content: string;
    color: 'red' | 'blue' | 'amber';
}) {
    const colorClasses = {
        red: 'border-red-600 text-red-600 hover:bg-red-600',
        blue: 'border-blue-600 text-blue-600 hover:bg-blue-600',
        amber: 'border-amber-600 text-amber-600 hover:bg-amber-600',
    };

    return (
        <button
            onClick={() => console.log('edit')}
            className={`${colorClasses[color]} py-2 px-4 border-2 font-semibold rounded hover:text-white transition-all`}
        >
            {content}
        </button>
    );
}
