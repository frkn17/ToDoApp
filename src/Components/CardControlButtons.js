import React, { useState } from 'react'

export const CardControlButtons = ({changeMode,clearList}) => {

  const [mode,setMode] = useState(0); //0 = All, 1 = Pending, 2 = Completed

  return (
    <div className='card-control-buttons'>
            <button className='control-button all'
              onClick={
                () => changeMode("all")
              }
            >
                All
            </button>
            <button className='control-button pending'
              onClick={
                () => changeMode("pending")
              }
            >
                Pending
            </button>
            <button className='control-button completed'
              onClick={
                () => changeMode("completed")
              }
            >
                Completed
            </button>
            <button className='control-button clear'
              onClick={
                () => clearList()
              }
            >
                Clear
            </button>
    </div>
  )
}
