import React from 'react';
import { useState } from 'react'
import TodoItem from './TodoItem';
import "./Todo.css";


const Todo = () => {
    let [value, setValue] = useState("ABCD");
    const  [todos, setTodos] = useState([]);

    const onDelete = (id)=>{
        let newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }
    
        
  return (
    <div className='Todo'>
        Daily routine
        <input  className='input'
        value={value}
        onChange={(e) =>{
        setValue(e.target.value)
        }}
        />

        <button className='Add'
         onClick={() =>{  
            setTodos([...todos, { id: Date.now(), value: value }]);
            setValue("");
        }}
        >
          Add
        </button>
        <div>
        {todos.map((todo)=>( 
            <TodoItem  key={todo.id} todo={todo} onDelete={onDelete}/>
        ))}
        </div>
    </div>
  );
};

export default Todo