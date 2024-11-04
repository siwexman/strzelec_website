'use client';

import { login } from '@/store/actions/login';
import { useFormState } from 'react-dom';
import { useModal } from '../context/ModalContext';

export default function LoginForm() {
    const [state, formAction] = useFormState<any, FormData>(login, undefined);
    const { handleClose } = useModal();

    function handleSubmitClose() {
        if (state && !state.error) {
            handleClose();
        }
    }

    return (
        <form onSubmit={handleSubmitClose} action={formAction} className="py-2">
            <div className="flex flex-col p-2 gap-2">
                <label htmlFor="login">Login:</label>
                <input
                    type="text"
                    id="login"
                    name="login"
                    className="border-2 rounded p-1"
                />
            </div>
            <div className="flex flex-col p-2 gap-2">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-2 rounded p-1"
                />
            </div>
            {state?.error && <p>{state.error}</p>}
            <div className="w-full flex justify-end px-2 py-2">
                <button
                    type="submit"
                    className="bg-green-800 rounded-md p-2 text-white"
                >
                    Zaloguj
                </button>
            </div>
        </form>
    );
}
