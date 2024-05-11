import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"

import "./main.css"





let title = "React Fundamentals"
let paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aneque beatae, harum ipsa non eveniet itaque provident quo aperiam."
let date = new Date().toString()
let titleStyle = {
  color: 'blue',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center'
};
let products = [
  {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
  },
  {
    id: 2,
    title: 'iPhone X',
    price: 899,
    thumbnail: 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg'
  },
  {
    id: 3,
    title: 'Samsung Universe 9',
    price: 1249,
    thumbnail: 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg'
  },
  {
    id: 4,
    title: 'OPPOF19',
    price: 280,
    thumbnail: 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg'
  },
  {
    id: 5,
    title: 'Huawei P30',
    price: 499,
    thumbnail: 'https://cdn.dummyjson.com/product-images/5/thumbnail.jpg'
  },
]
function Product(props) {
  return (
    <div className='product'>
      <img src={props.thumbnail} alt={props.title} />
      <p>{props.title}</p>
      <p>${props.price}</p>
    </div>
  );
}
     



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 style={titleStyle}>{title}</h1>
    <h3>{date}</h3>
    <p>{paragraph}</p>

    <h2>Products</h2>
    {/* <div className='product'>
      <img src={products[0].thumbnail} />
      <p>{products[0].title}</p>
      <p>${products[0].price}</p>
    </div>
    <div className='product'>
      <img src={products[1].thumbnail} />
      <p>{products[1].title}</p>
      <p>${products[1].price}</p>
    </div>
    <div className='product'>
      <img src={products[2].thumbnail} />
      <p>{products[2].title}</p>
      <p>${products[2].price}</p>
    </div>
    <div className='product'>
      <img src={products[3].thumbnail} />
      <p>{products[3].title}</p>
      <p>${products[3].price}</p>
    </div>
    <div className='product'>
      <img src={products[4].thumbnail} />
      <p>{products[4].title}</p>
      <p>${products[4].price}</p>
    </div> */}
    
    <Product
      title={products[0].title}
      price={products[0].price}
      thumbnail={products[0].thumbnail}
    />
    <Product
      title={products[1].title}
      price={products[1].price}
      thumbnail={products[1].thumbnail}
    />
    <Product
      title={products[2].title}
      price={products[2].price}
      thumbnail={products[2].thumbnail}
    />
    <Product
      title={products[3].title}
      price={products[3].price}
      thumbnail={products[3].thumbnail}
    />
    <Product
      title={products[4].title}
      price={products[4].price}
      thumbnail={products[4].thumbnail}
    />


<App/>

  </React.StrictMode>,
);
