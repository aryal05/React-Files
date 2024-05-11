import style from "./ButtonsContainer.module.css"
const ButtonsContainer = ({onButtonClick})=>{
const ButtonsName = ["C","1","2","+","3","4","-","5","6","*","7","8","/", "=","9", "0","."]

     return(
          <div className= {style.buttonContainer}>
               {ButtonsName.map(button=> <button className = {style.button} onClick={()=> onButtonClick(button)}>{button}</button>)}
         
        </div>

     )
}
export default ButtonsContainer;