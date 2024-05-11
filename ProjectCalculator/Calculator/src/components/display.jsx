import style from "./display.module.css"

const Display = ({displayVal}) =>{
     return(
          <input className= {style.display} type="display"  value={displayVal} readOnly/>
     )
}
export default Display;