import React, { useState } from 'react'

export default function HelloW() {
    const [count, setCount3]= useState(0) 
    let  increment=()=>{
        setCount3(count*2)
    }
    let  decrement=()=>{
        setCount3(count-1)
    }
  return (
      <div>
            <h1>Hello guys</h1>
            <h3>Counter:{count}</h3>
            <button onClick={increment}>+</button><button onClick={decrement}>-</button>
        </div>
  )
}
