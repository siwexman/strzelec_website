import { ReactNode } from 'react';

export default function InfoButton(props: { children: ReactNode }) {
    return (
        <div className="rounded-full bg-slate-300 p-6 cursor-pointer">
            {props.children}
        </div>
    );
}
