import { useEffect, useState } from "react"
import TodOInput from "./assets/components/Todoinput"
import Todolist from "./assets/components/Todolist"

function App() {
  const [todos,setTodos]= useState([])
  const [todoValue,setTodoValue]=useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos: newList}))
  }



  function handleAddTodos(newTodo){
    const newTOdoList = [...todos,newTodo]
    persistData(newTOdoList)
    setTodos(newTOdoList)
  }

  function handleDeleteTodos(index){
    const newTOdoList = todos.filter((todos,todosIndex)=>{
      return todosIndex !== index
    })
    persistData(newTOdoList)
    setTodos(newTOdoList)
  }

  function handleEditTodos(index){
    const valueTObeEdited = todos[index]
    setTodoValue(valueTObeEdited)
    handleDeleteTodos(index)
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)


  },[])


  return (
    <>
      <TodOInput handleAddTodos={handleAddTodos} setTodoValue={setTodoValue}
      todoValue={todoValue}/>
      <Todolist handleDeleteTodos={handleDeleteTodos} todos={todos}
      handleEditTodos={handleEditTodos} />
    </>
  )
}

export default App
