const ErrorMessage =({items}) =>{
    

     return<>
         { items.length ===0? <h3>Your Food Is Being Prepared.</h3>: null
     }</>
     
}

export default ErrorMessage;