import { useState,useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8) // initial length of password
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState (false);
  const [password, setPasssword] = useState("")

  const passswordGenerator = useCallback(()=>{
    let pass = "";
    let st = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+="0123456789"
    if(char) str+="!@#$%^&*()_+"
    for(let i=1;i<=length;i++){
      pass += st.charAt(Math.floor(Math.random()*st.length))

    }
    setPasssword(pass)


  },[length, number, char, setPasssword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />

      </div>
    </div>
    </>
  )
}

export default App
