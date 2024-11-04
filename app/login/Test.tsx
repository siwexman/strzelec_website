import { getSession } from '@/store/actions/login';

export default async function Test() {
    const session = await getSession();

    return (
        <div>
            <h2>Jak mówi</h2>
            {session.isLoggedIn && <h3>Essa</h3>}
        </div>
    );
}
