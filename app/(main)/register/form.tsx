'use client';
import { FormEvent } from 'react';

export default function Form() {
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password'),
            }),
        });
        console.log({ response });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" type="text" />
            <input name="password" type="password" />
            <button type="submit">Register</button>
        </form>
    );
}
