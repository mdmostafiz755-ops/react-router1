import React from 'react'
import { useLoaderData } from 'react-router'

const Suser = () => {
    const user= useLoaderData();
    console.log(user)
  return (
    <div>

    </div>
  )
}

export default Suser