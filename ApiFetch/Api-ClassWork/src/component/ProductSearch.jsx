import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetchProducts()
  }

  function fetchProducts() {
    axios
      .get(`https://dummyjson.com/products/search?q=${searchInput}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    console.log("use effect");
    fetchProducts();
  }, [searchInput]); // every time there is change in searchInput, useEffect re-runs

  return (
    <>
    <h1>Component Life Cycle</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type="text"
        />
        <button>search</button>
      </form>
      Found Products: {products.length}
      {
        products.length ===0
        &&
        <p> <b>No Matching Products Found </b> </p>

      }
      <ul>
        {products.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </>
  );
}
