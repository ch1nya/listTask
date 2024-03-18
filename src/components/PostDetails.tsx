import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/posts';

export const PostsList: React.FC = () => {
    const { data: posts, isLoading } = useQuery('posts', getPosts);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {posts?.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/post/${post.id}`}>View</Link>
                </div>
            ))}
        </div>
    );
};
