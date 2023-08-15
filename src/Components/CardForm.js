import React, { useState } from 'react'

export const CardForm = ({addTodo,todo,setTodo}) => {

  const handleClick = (e) => {
    e.preventDefault();

    addTodo()

    setTodo('');
  }

  return (
    <div className='card-form'>
        <input 
          className='input-group input-text' 
          type='text' 
          placeholder='Add New Task'
          value={todo}
          onChange={
            (e) => setTodo(e.target.value)
          }
          />
        <button 
          className='input-group add-button'
          type='submit'
          onClick={
            (e) => handleClick(e)
          }  
          >ADD</button>
    </div>
  )
}
