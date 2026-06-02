import React from 'react'
import { useLoaderData } from 'react-router'

const User = () => {
  console.log('loading all users ....');
    const user=useLoaderData();
    console.log(user);
  return (
    <div>

    </div>
  )
}

export default User