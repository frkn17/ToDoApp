import React from 'react'
import {ToDo} from './ToDo'


export const CardToDo = ({todoList,toggleToDo,deleteToDo,editToDo}) => {
  return (
    <div className='card-todo'>
        <ul>
            {
                todoList.length > 0 ? 
                    todoList.map(
                        (todo,index) => {
                            return(                             
                                    <ToDo
                                        {...todo}
                                        key={todo.id}
                                        toggleToDo = {toggleToDo}
                                        deleteToDo = {deleteToDo}
                                        editToDo = {editToDo}

                                    />
                                
                            )   
                        }
                    ) : "Task List is empty." 
            }
        </ul>
    </div>
  )
}
