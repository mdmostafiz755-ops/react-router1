import React from 'react'
import { Link, useNavigate } from 'react-router'

const PostDetails = ({ post }) => {
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate('/More');
    }
    return (
        <div>
            <div style={{ border: "2px solid red" }}>
                <h2>{post.title}</h2>
                <button>
                    <Link to={`/post/${post.id}`}>View Details</Link>
                </button>
                <button onClick={handleNavigate}>More...</button>
            </div>
        </div>
    )
}

export default PostDetails