import React from 'react'
import { Link } from 'react-router'

const PostDetails = ({ post }) => {
    return (
        <div>
            <div style={{ border: "2px solid red" }}>
                <h2>{post.title}</h2>
                <button>
                    <Link to={`/post/${post.id}`}>View Details</Link>
                </button>
            </div>
        </div>
    )
}

export default PostDetails