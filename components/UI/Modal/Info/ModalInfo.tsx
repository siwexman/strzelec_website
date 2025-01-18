import DelayBtn from './DelayBtn';

export default function ModalInfo({
    type,
    content,
    handleModalClose,
}: {
    type: string;
    content: string;
    handleModalClose: () => void;
}) {
    const colorClass = `${
        type === 'correct' ? 'text-green-600' : 'text-red-600'
    }`;

    return (
        <div className="flex flex-col">
            <div className="text-center">
                <p
                    className={`uppercase font-semibold text-xl py-8 px-4 ${colorClass}`}
                >
                    {content}
                </p>
            </div>
            {type === 'correct' ? (
                <DelayBtn />
            ) : (
                <button
                    className="w-1/2 mx-auto p-2 bg-red-500 rounded text-white font-semibold"
                    onClick={handleModalClose}
                >
                    Wróć
                </button>
            )}
        </div>
    );
}
