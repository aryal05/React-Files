import { useState,useCallback, useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8) // initial length of password
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState (false);
  const [password, setPasssword] = useState("")


  //UesRef hook
  const passwordRef = useRef(null)

  const passswordGenerator = useCallback(()=>{
    let pass = "";
    let st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) st+="0123456789"
    if(char) st+="!@#$%^&*()_+"
    for(let i=1;i<=length;i++){
      pass += st.charAt(Math.floor(Math.random()*st.length))

    }
    setPasssword(pass)


  },[length, number, char, setPasssword])
useEffect(()=>{
  passswordGenerator()
},[length, number, char, setPasssword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-3xl text-center my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-m gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" name="" id=""
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id=""
            defaultChecked={number}
            onChange={()=>{setNumber((number)=>!number)}} />
          </div>
          <label htmlFor="">Numbers</label>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" name="" id=""
            defaultChecked={char}
            onChange={()=>{setChar((char)=>!char)}} />
          </div>
          <label htmlFor="">Characters</label>
        </div>
        
        
    </div>
    
    </>
  )
}

export default App
