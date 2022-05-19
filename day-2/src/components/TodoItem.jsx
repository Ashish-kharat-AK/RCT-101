import React from 'react'
import { useState } from 'react'


const Todoitem = ({todo, onDelete}) => {
    const [isComplted, setIsCompleted] = useState(todo.isComplted)
    return (
    <div key={todo.id}>
        <input
        type="checkbox"
        checked={isComplted}
        onChange={(e)=>{
            setIsCompleted(e.target.checked);
            console.log(e.target.checked);
        }}
        />
        <div className={isComplted ? true: ""}>{todo.value}</div>
        <div className="Delete" onClick={()=>onDelete(todo.id)}>Delete</div>
    </div>
  );
};

export default Todoitem