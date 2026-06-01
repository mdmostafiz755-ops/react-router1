import React from 'react'
import { useLoaderData } from 'react-router'

const User = () => {
    const user=useLoaderData();
    console.log(user);
  return (
    <div>

    </div>
  )
}

export default User