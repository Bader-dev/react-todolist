import { useState } from "react"

export default function TodOInput(props){
    const {handleAddTodos,setTodoValue,todoValue} = props
    
    return (
        <header>
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder="Enter Todo..."/>
            <button onClick={() => {
                handleAddTodos(todoValue),
                setTodoValue('')
            }}>Add</button>
        </header>
    )

}