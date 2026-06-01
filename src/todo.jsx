import React, { use } from 'react'

const Todo = ({userP}) => {
    const data= use(userP);
    console.log(data);
  return (
    <div>todo</div>
  )
}

export default Todo