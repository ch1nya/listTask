import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/posts';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
interface Styles {
    container: React.CSSProperties;
    post: React.CSSProperties;
    title: React.CSSProperties;
    body: React.CSSProperties;
    link: React.CSSProperties;
}

const styles: Styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    post: {
        width: '70%',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        background: '#fff',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',

    },
    body: {
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#555',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '1rem',
        display: 'inline-block',
        marginTop: '10px',
    },
};

export const PostsList: React.FC = () => {
    const { data: posts, isLoading } = useQuery<Post[]>('posts', getPosts);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div style={styles.container}>
            {posts?.map((post: Post) => (
                <div style={styles.post} key={post.id}>
                    <h2 style={styles.title}>Title: {post.title}</h2>
                    <p style={styles.body}>Post: {post.body}</p>
                    <Link style={styles.link} to={`/post/${post.id}`}>просмотр</Link>
                </div>
            ))}
        </div>
    );
};
