import { ReactNode } from 'react';

export default function Button(props: {
    children: ReactNode;
    onClick: () => void;
}) {
    return <button onClick={props.onClick}>{props.children}</button>;
}
