import React from 'react'
import { useLoaderData } from 'react-router'

const Spost = () => {
    const data= useLoaderData();
  return (
    <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
    </div>
  )
}

export default Spost