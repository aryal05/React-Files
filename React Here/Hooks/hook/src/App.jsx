import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let counter = 5;
const addValue = ()=>{
  counter+=1;
  console.log("Clicked", counter)
}
  return (
    <>
      <h1>React with Chai.</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button>Delete Value</button>
    </>
  )
}

export default App
