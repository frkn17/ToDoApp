import { useEffect, useState } from 'react';
import './App.css';
import { CardControlButtons } from './Components/CardControlButtons';
import { CardForm } from './Components/CardForm';
import { CardHeader } from './Components/CardHeader';
import { CardToDo } from './Components/CardToDo';

function App() {

  const [todos,setTodos] = useState(() => {
    const localTodos = localStorage.getItem("TODOS")

    if(localTodos == null) return []
    
    return JSON.parse(localTodos)
  }); //allToDos
  const [filteredTasks,setFilteredTasks] = useState([]);
  const [title,setTodo] = useState(''); //todoTitle
  const [editId,setEditId] = useState(0); //editId
  const [mode,setMode] = useState(0);// add or edit mode

  const[showMode,setShowMode] = useState('all')

  useEffect(() => {
    localStorage.setItem("TODOS",JSON.stringify(todos))
  },[todos])

  const addTodo = () => {
    if(mode === 0){
      setTodos(
        (currentToDos) => {
          return [...currentToDos,{
            id: crypto.randomUUID(),
            title:title,
            completed:false
          }]
        }
      )
    }
    else{
      setTodos(currentToDos => {
        return currentToDos.map(myTodo => {
          if(myTodo.id === editId) {
            setMode(0)
            return {...myTodo,title}
          }
          setMode(0)
          return myTodo
        })
      })
    }
  }

  const deleteToDo = (id) => {
    setTodos(
      currentToDos => {
        return currentToDos.filter(
          todo => todo.id !== id
        )
      }
    )
  }

  const clearAll = () => {
    setTodos(
      currentToDos => {
        return currentToDos.splice(0,currentToDos.length)
      }
    )
  }

  const editToDo = (id,title) => {
    setTodo(title);
    setEditId(id);
    setMode(1)
  }

  const toggleToDo = (id,completed) => {
    setTodos(currentToDos => {
      return currentToDos.map(todo => {
        if(todo.id === id) {
          return {...todo,completed}
        }
        return todo
      })
    })
  }

  const changeMode = (showMode) => {
    setShowMode(showMode)
    setFilteredTasks(
      todos.filter(
        todo => todo.completed === (showMode == "pending" ? false : true)
      )
    )
    
  }

  return (
    <div className='card'>
      <CardHeader/>
      <CardForm
        addTodo={addTodo}
        todo = {title}
        setTodo = {setTodo}
      />
      <div className='card-body'>
        <CardControlButtons
          changeMode={changeMode}
          clearList={clearAll}
        />
        <CardToDo
          todoList = {showMode == "all" ? todos : filteredTasks}
          toggleToDo = {toggleToDo}
          deleteToDo = {deleteToDo}
          editToDo = {editToDo}
        />
      </div>
    </div>
  );
}

export default App;
