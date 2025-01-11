import axios from "axios";
import { useEffect, useState } from "react";

const ApiFetch = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function fetchData() {
    if (!searchInput.trim()) {
      setProducts([]); // Clear products if input is empty
      return;
    }

    axios
      .get(`https://dummyjson.com/products/search?q=${searchInput}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, [searchInput]);

  return (
    <>
      <h1>API Link</h1>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Search for products..."
      />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ApiFetch;
