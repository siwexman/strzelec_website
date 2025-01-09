import DelayBtn from './DelayBtn';

export default function ModalCorrect({ content }: { content: string }) {
    return (
        <div className="flex flex-col">
            <div className="text-center">
                <p className="uppercase font-semibold text-xl py-8 px-4 text-green-600">
                    {content}
                </p>
            </div>
            <DelayBtn />
        </div>
    );
}
