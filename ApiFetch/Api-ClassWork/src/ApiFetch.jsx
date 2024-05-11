import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const ApiFetch = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("")


  function handleSubmit(e){
    e.preventDefault();
    fetchData()
  }


  function fetchData(){
    
    axios
      .get(`https://dummyjson.com/products/search?q=${searchInput}`)
      .then((res) => {
        setProducts(res.data.products);
       
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  
  }
  useEffect(()=>{
    fetchData()

  },[searchInput]); // EveryTime there is Chnage in SearchInput, useEffect re-runs..
 
    
    


  return (
    <>
      <h1>Api Link</h1>

      <form onSubmit={handleSubmit}>
        <input value={searchInput} onChange ={(e)=>{
          setSearchInput(e.target.value)
        }} type="text" />
        <button>Search</button>
      </form>
      <ul>
        {products.map((product) => (
          <li key = {product.id}>{product.title}</li>
        ))}
      </ul>
    </>
)
};
export default ApiFetch;
