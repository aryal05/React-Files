import React,{useState} from "react";
import style from "./changeTheme.module.css"

export default function ChangeTheme() {
  const [currentTheme, setCurrentTheme] = useState("light")

  return (
    <div className={style.theme}>
      <button type="button" onClick={() =>{
        setCurrentTheme("dark")
      }}>dark theme</button>
      <button type="button" onClick={() =>{
        setCurrentTheme("light")
      }}>light theme</button>

      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        deleniti sapiente impedit, voluptates ipsam illum in cupiditate, quia
        amet iure odio placeat enim distinctio fuga alias debitis perferendis
        exercitationem vero?
      </p>
    </div>
  );
}
