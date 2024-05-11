import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo"
import TodoItems from './TodoItems';
import "./App.css";
import Counter from './components/count';


 

function App() {

  const todoItems = [{
    name: "Buy Milk",
    dueDate: "4/10/2024"
  },
{
  name: "Go To College",
    dueDate: "4/10/2024"

},
{
  name: "Find the Item",
    dueDate: "4/10/2024"

}]





  return <center class = "todo-container">
   <AppName />
   <AddTodo />
   <TodoItems todoItems = {todoItems}></TodoItems>
  <Counter></Counter>
  </center>
}

    
export default App
