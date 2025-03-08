import { useState } from 'react'


function App() {
  const [length, setLength] = useState(8) // initial length of password
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState (false);
  const [password, setPasssword] = useState("")

  const passswordGenerator = ()=>{

  }
  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Generater</h1>

    </>
  )
}

export default App
