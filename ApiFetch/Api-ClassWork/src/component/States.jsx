import React, {useState} from 'react';
const States = ()=>{
     const [inputValue, newChangeValue]=useState("Rajat")

     const onChange =(event)=>{
          const newValue = event.target.value;
          newChangeValue(newValue)


     }
     return (
          <div> 
               
               <input type="text" value={inputValue}  placeholder="Type Here" onChange={onChange} />
          </div>
     )
}
export default States;
