// import Posts from '@/components/Dashboard/Posts/Posts';

// export default function PostsPage() {
//     return (
//         <div>
//             <h2 className="p-2 mb-4 text-center">Wsystkie aktualności</h2>
//             <Posts />
//         </div>
//     );
// }

import { redirect } from 'next/navigation';

export default function Posts() {
    redirect('posts/1');
}
