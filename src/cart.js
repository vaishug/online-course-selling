import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeItem }) => {
  return (
    <div>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: 'The complete python Bootcamp', description: 'Description for Product 1', quantity:"2", price: 10 },
    
    // Add more products as needed
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== productToRemove.id);
    setCartItems(updatedCart);
  };

 
  return (
    <div>
         <h2>Cart</h2>
         <br/>
         <br/>
        <div className="container mt-5">
        {/* Render list of products */}
        {products.map(product => (
            <div key={product.id} className="row product" style={{border: '1px solid rgba(0,255,0,0.3)'}}>
                <div className="col-md-2">
                    <img src="/images/python.jpg" alt="" height="50" />
                </div>
                <div className="col-md-6 product-detail">
                    <h6>{product.name}</h6>
            </div>
            <div className="col-md-2 cart-product-price">
                <p>quantity:{product.quantity}</p>
            </div>
            <div className="col-md-2 cart-product-price">
                <p>Price:{product.price} Rs</p>
            </div>
           
        </div>
      ))}

      {/* Render Cart component */}
      <Cart cartItems={cartItems} removeItem={removeFromCart} />
      </div>

      
    </div>
  );
};

export default ProductComponent;
