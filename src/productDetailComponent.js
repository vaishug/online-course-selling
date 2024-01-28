import React, { useState } from 'react';

const ProductDetailComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 20 },
    // Add more products as needed
  ];

  /*
  const handleProductClick = (productId) => {
    
    const product = products.find(product => product.id === productId);
    setSelectedProduct(product);
  };
*/
  return (
    <div>
      <div className="firstContainer">
           <h2>
              The Complete Python Bootcamp From Zero to Hero in Python
           </h2>
           <p>
            
              Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games
           </p>
           
         </div> 
      {
        /*
          
            {products.map(product => (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button onClick={() => handleProductClick(product.id)}>View Details</button>
              </div>
            ))}

         
            {selectedProduct && (
              <div>
                <h2>{selectedProduct.name}</h2>
                <p>{selectedProduct.description}</p>
                <p>Price: ${selectedProduct.price}</p>
              
              </div>
            )}
        */
      }
    </div>
  );
};

export default ProductDetailComponent;
