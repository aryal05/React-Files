import styles from "./Item.module.css"

const Item =({Food ,bought, handleBuyButtonClicked})=>{



     return (
          <li  className={`${styles.Item} list-group-item ${bought && "active"}` }>{Food}
          
               <button className={`${styles.button} btn btn-info `}
               
               onClick = { handleBuyButtonClicked}
               >Buy</button>
          
          
          </li>
)
     

} 
export default Item; 