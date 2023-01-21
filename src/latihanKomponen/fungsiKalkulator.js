import React, { useState } from 'react'

export default function Kalkulator() {
    const [nA, count]= useState(0) 
    const [nB, countB] = useState(0)
    const [hasil, setHasil]= useState(0)
    let  tambah=()=>{
        setHasil(+nA + +nB)
    }

  return (
    <div>
      <h3>hasil :{hasil={}}</h3>
      <input type="number" onChange={event => count(event.target.value)}/>
      <input type="number" onChange={event => countB(event.target.value)}/>
      <button onClick={tambah}>+</button>
    </div>
  )
}
