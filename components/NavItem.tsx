import Link from 'next/link';

export default function NavItem(props: { text: string }) {
    return (
        <div className="my-auto">
            <Link href={''}>{props.text}</Link>
        </div>
    );
}
