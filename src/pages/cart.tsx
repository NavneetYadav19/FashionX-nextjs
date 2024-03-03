import React from 'react';
import CartPage from '../components/CartPage';

const Cart: React.FC = () => {
  
  const products: Product[] = [
    {
      name: 'Product 1',
      image: 'path-to-image-1.jpg',
      price: 20,
    },
    {
      name: 'Product 2',
      image: 'path-to-image-2.jpg',
      price: 30,
    },
    
  ];

  return <CartPage products={products} />;
};

export default Cart;
