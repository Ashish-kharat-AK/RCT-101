import React from 'react'
// import "./Counter.css"


 const Counter = () => {

  const [count, setCount] =  React.useState(1);
  const condition = count% 2 === 0;
  
  return (
    <div className='App'>
        <h1 className="green" style={{ color: condition ? "green" : "Red" }}>Counter App {count}</h1>
        <button   className=" Incriment" onClick={() => setCount(count + 2)}> Incriment</button>
        <button  className="Decriment" onClick={() => setCount(count - 3)}>Decriment</button>
        <button  className="Double" onClick={() => setCount(count * 2)}>Double</button>
        
       
      
    </div>
  )

}

export default Counter

// style={{ color: condition ? "green" : "Red" }}