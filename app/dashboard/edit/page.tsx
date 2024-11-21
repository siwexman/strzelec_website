'use client';
import { useState } from 'react';

export default function PostForm() {
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);

    const handleFileChange = e => {
        setImages(e.target.files);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // Prepare FormData for sending the file and content
        const formData = new FormData();
        formData.append('content', content);
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

        try {
            const res = await fetch('/api/test', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                const result = await res.json();
                console.log('Post successfully submitted:', result);
            } else {
                console.error('Error uploading post:', res.statusText);
            }

            console.log(res);
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Write your post..."
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <input type="file" multiple onChange={handleFileChange} />
            <button type="submit">Submit Post</button>
        </form>
    );
}
