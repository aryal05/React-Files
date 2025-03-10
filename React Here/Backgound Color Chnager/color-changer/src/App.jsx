import { useState } from "react"

function App() {
  const [color, setColor] = useState("yellow")
  const para = ()=>{
    return setColor === "black" ? "text-white" : "text-black";
  }
  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{ backgroundColor: color }}>
      <h1 className="text-blue-950 font-bold text-2xl text-center py-4 border-1">Welcome Darling, TO THE WORLD OF CSS</h1>
      <p  className={`px-10 py-8 font-medium text-2xl ${para()}`}>Here You can Change The Color of The Background As You Want It To Be.</p>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap gap-3 bg-white rounded-xl shadow-lg px-3 py-2">
          <button onClick={()=>setColor("red")} className="outline-none px-4 py-2 shadow-lg bg-red-500 rounded-full text-white cursor-pointer">Red</button>
          <button onClick={()=> setColor("black")} className="outline-none px-4 py-2 shadow-lg bg-black rounded-full text-white cursor-pointer">Black</button>
          <button onClick={()=> setColor("pink")} className="outline-none px-4 py-2 shadow-lg bg-pink-500 rounded-full text-white cursor-pointer">Pink</button>
          <button onClick={()=> setColor("#00693E")} className="outline-none px-4 py-2 shadow-lg bg-green-500 rounded-full text-white cursor-pointer">Green</button>
          <button onClick={()=> setColor("white")} className="outline-none px-4 py-2 shadow-lg bg-white rounded-full text-black cursor-pointer">White</button>
          <button onClick={()=> setColor("#72A0C1")} className="outline-none px-4 py-2 shadow-lg bg-blue-500 rounded-full text-white cursor-pointer">Blue</button>
        </div>
      </div> 


     </div>
    </>
  )
}

export default App
