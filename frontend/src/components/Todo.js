import React from 'react'

export default function Todo(props) {
    const {id,
        title,isCompleted}=props.task
  return (
    <div className='Todo'>
      <input type="checkbox" checked={isCompleted}/>
      <span style={{textDecoration:isCompleted?'line-through':"none"}}> {title} </span>
      <button>X</button>
    </div>
  )
}

