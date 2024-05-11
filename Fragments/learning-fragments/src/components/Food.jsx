import { useState } from "react";
import Item from "./Item"


const Food=({items}) =>{

    let [activeItem, setActiveItem] = useState([]);
    let OnBuyButton =( item ,event)=>{
        let newItems = [...activeItem, item]
        setActiveItem(newItems)

    }

     
    return(
         
         <ul className="list-group">
              
         {items.map(item => 
     <Item key={item} Food = {item}
     bought= {activeItem.includes(item)} 
     
        handleBuyButtonClicked ={(event)=>OnBuyButton(item,event)}
     ></Item>)}
 </ul>
    )
}
export default Food;
