import React from 'react'
import Todocard from './Todocard'

export default function Todolist(props) {
    const {todos , handleDeleteTodos} = props
    


  return (
    <ul className='main'>
        {todos.map((todos,todosIndex)=>{
            return (
            <Todocard {...props} key={todosIndex} index={todosIndex}>
                <p>{todos}</p> 

            </Todocard>
            )
        })}
    </ul>
  )
}
