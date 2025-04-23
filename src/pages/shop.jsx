import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Shop = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', price: '$20', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', price: '$30', description: 'Description for product 3' },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Shop</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text fw-bold">{product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;