import React from 'react'
import { useLoaderData } from 'react-router'
import PostDetails from '../postDetails/postDetails';

const Post = () => {
    const post = useLoaderData();
    console.log(post);
    return (
        <div>
            <h1>Total posts:{post.length}</h1>

            {
                post.map(p => <PostDetails post={p} key={p.id}></PostDetails>)
            }
        </div>
    )
}

export default Post