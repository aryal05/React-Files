import { useState } from "react"

function App() {
  const [color, setColor] = useState("yellow")
  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap gap-3 bg-white rounded-xl shadow-lg px-3 py-2">
          <button className="outline-none px-4 py-2 shadow-lg bg-red-500 rounded-full text-white">Red</button>
          <button className="outline-none px-4 py-2 shadow-lg bg-black rounded-full text-white">Black</button>
          <button className="outline-none px-4 py-2 shadow-lg bg-red-500 rounded-full text-white">Pink</button>
          <button className="outline-none px-4 py-2 shadow-lg bg-red-500 rounded-full text-white">Red</button>
          <button className="outline-none px-4 py-2 shadow-lg bg-red-500 rounded-full text-white">Red</button>
          <button className="outline-none px-4 py-2 shadow-lg bg-red-500 rounded-full text-white">Red</button>
        </div>
      </div> 


     </div>
    </>
  )
}

export default App
