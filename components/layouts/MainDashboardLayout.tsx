import { ReactNode } from 'react';
import UserNav from '../UI/UserNav/UserNav';

export default function MainDashboardLayout(props: { children: ReactNode }) {
    return (
        <main>
            <UserNav />
            <div className="mt-20">
                <div className="max-w-maxWidthSm mx-auto px-8 pt-8 w-full">
                    {props.children}
                </div>
            </div>
        </main>
    );
}
