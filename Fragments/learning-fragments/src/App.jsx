import React, { useState } from "react"; // for React.Fragment method
import "./App.css";
import Food from "./components/Food";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInputs";

function App() {
 
   let [foodItems, setItemsToShow] = useState(["Dal", "Salad", "Milk", "Curd", "Green Vegetable"])
  
  const handleOnKeyDown = (event) => {
    
    if(event.key ==="Enter"){
      let newItem = event.target.value;
      event.target.value = ''
      let newItems = [...foodItems, newItem]
      setItemsToShow(newItems)
      console.log("Entered Food Item Is:" + newItem)
      
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
      
        <Food items={foodItems}></Food>
      </Container>

      {/* <Container><p>Above is the list of healthy food that are good for your health 
      and well being</p></Container>
     */}
    </>
  );
}

export default App;

// <React.Fragment>
{
  /* </React.Fragment> */
}
