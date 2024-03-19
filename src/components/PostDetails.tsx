import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPost } from '../api/posts';

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
}; // Код повторяется умышленно, чтобы не создавать еще один файл

export const PostDetails: React.FC = () => {
    const { postId } = useParams();
    const { data: post, isLoading } = useQuery(['post', postId], () => getPost(Number(postId)));

    if (isLoading) return <div>Loading...</div>;

    return (
        <div style={styles.post}>
            <h2 style={styles.title}>Title: {post?.title}</h2>
            <p style={styles.body}>Text: {post?.body}</p>
            <Link style={styles.link} to="/">назад</Link>
        </div>
    );
};
