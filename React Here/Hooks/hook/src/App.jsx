import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter = 5;
// const addValue = ()=>{
//   counter+=1;
//   setCounter(counter)
//   console.log("Clicked", counter)
// }
let [counter ,setCounter] = useState(0)
  return (
    <>
     <h1>React with Chai.</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add Value</button>
      <button onClick={() => setCounter(Math.max(0, counter - 1))}>Delete Value</button>
    </>
  )
}

export default App
