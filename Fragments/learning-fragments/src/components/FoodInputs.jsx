import style from "./FoodInput.module.css"

const FoodInput = ({handleOnKeyDown})=>{
     return(
          <input type="text" placeholder="Enter Food Item" className={style.FoodInput}
          onKeyDown={handleOnKeyDown}
          
          />
     )

}
export default FoodInput;
