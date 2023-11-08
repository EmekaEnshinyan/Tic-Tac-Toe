import { useState } from 'react'
import './App.css'

function Square(){ 
  const [value, setValue] = useState(null)


  function handleClick(){
    console.log({value},{setValue});
    setValue('X')
  }
  return (
  <button onClick={handleClick} className='square'>{value}</button>
)}

function Board() {
  const [squares, setSquares] = UseState(Array(9).fill(null))
  return (
    <>
    <div className="boardRow">
    <Square /><Square /><Square />
    </div>
    <div className="boardRow">
    <Square /><Square /><Square />
    </div>
    <div className="boardRow">
    <Square /><Square /><Square />
    </div>
    </>
  )
}

function App() { 
  return (
    <>
     <Board /> 
    </>
  )
}

export default App

