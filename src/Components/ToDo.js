import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({id,title,completed,toggleToDo,deleteToDo,editToDo}) => {

  
  return (
    <>
        <li key={id} className='task-element'>
        <div className='task'>
            <div className='task-header'>
                <input type='checkbox' checked = {
                        completed
                    }
                    onChange={
                        (e) => toggleToDo(id,e.target.checked)
                    }

                />
                <label className={
                    completed == true ? "completed-task" : ""
                }>
                    {title}
                </label>
            </div>
            <div className='task-actions'>
                <button className='task-button edit'
                   onClick={
                    () => editToDo(id,title)
                   }
                >
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button className='task-button remove'
                    onClick={
                            () => deleteToDo(id)
                        }
                >
                    <FontAwesomeIcon icon={faTrash}
                    />
                </button>
            </div>
        </div>
    </li>
    </>
  )
}
