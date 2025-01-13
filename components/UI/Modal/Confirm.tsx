export default function Confirm({
    content,
    handleConfirm,
    handleClose,
}: {
    content: string;
    handleConfirm: () => void;
    handleClose: () => void;
}) {
    return (
        <div className="p-2">
            <h3 className="font-bold text-xl pb-4">
                Czy na pewno chcesz usunąć {content}?
            </h3>
            <div className="py-4 flex justify-around">
                <button
                    className="px-4 py-2 border-2 rounded-lg bg-red-400 text-lg font-semibold hover:scale-110 transition-all"
                    onClick={handleConfirm}
                >
                    Tak
                </button>
                <button
                    className="px-4 py-2 border-2 rounded-lg bg-green-400 text-lg font-semibold hover:scale-110 transition-all"
                    onClick={handleClose}
                >
                    Nie
                </button>
            </div>
        </div>
    );
}
