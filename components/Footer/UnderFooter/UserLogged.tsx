import LoginButton from './LoginButton';
import { getSessionUser } from '@/store/action/session';

export default async function UserLogged() {
    const user = await getSessionUser();
    
    return (
        <div className="flex gap-1">
            {!user && <LoginButton />}
            <p className="text-sm my-auto">
                Zrealizował{' '}
                <a href="" className="font-semibold">
                    Karol Strączek
                </a>
            </p>
        </div>
    );
}
