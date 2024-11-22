'use client';
import { useEffect, useState } from 'react';

export default function EditPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('/api/upload');
            const posts = await res.json();
            console.log(posts);
        };
        getPosts();
    }, []);

    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                    </div>
                );
            })}
        </div>
    );
}
