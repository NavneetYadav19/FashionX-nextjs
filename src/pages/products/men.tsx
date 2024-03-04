import React from 'react';
import ProductHeader from '../../components/ProductHeader';
import MenProductSection from '../../components/MenProductsSection';

const Men: React.FC = () => {
  const products = [
    { id: 13, name: "Men's Polo", price: 819, image: 'https://m.media-amazon.com/images/I/81RcNGzlIhL._SY879_.jpg' },
    { id: 14, name: "Men's Slim Fit T-Shirt", price: 1081, image: 'https://m.media-amazon.com/images/I/81lLUefI0GL._SY879_.jpg' },
    { id: 15, name: "Men's Shirt", price: 1749, image: 'https://m.media-amazon.com/images/I/81SAi-+fiWL._SY879_.jpg' },
    { id: 16, name: "Men's T-Shirt", price: 2999, image: 'https://m.media-amazon.com/images/I/81P+jPzJkLL._SX569_.jpg' },
    { id: 17, name: "Mens Solid Trousers", price: 2799, image: 'https://m.media-amazon.com/images/I/71e2Hf0I31L._SY879_.jpg' },
    { id: 18, name: "Men's Skinny Jeans", price: 6999, image: 'https://m.media-amazon.com/images/I/71K2E4RMJNL._SY879_.jpg' },
    { id: 19, name: "Casual Short", price: 2499, image: 'https://m.media-amazon.com/images/I/71bMUKY3XoL._SY879_.jpg' },
    { id: 20, name: "Puma Men's Jackets", price: 1639, image: 'https://m.media-amazon.com/images/I/819r4+9X-fL._SY879_.jpg' },
    { id: 21, name: "Men's Suits", price: 14699, image: 'https://m.media-amazon.com/images/I/51q5cVIn4RL._SX679_.jpg' },
    { id: 22, name: "Puma BMW Sneaker", price: 10999, image: 'https://m.media-amazon.com/images/I/61xVSdJGl1L._SY695_.jpg' },
    { id: 23, name: "Puma Sandal", price: 2349, image: 'https://m.media-amazon.com/images/I/51VG++gx8BL._SY695_.jpg' },
    { id: 24, name: "Training Shoe", price: 4499, image: 'https://m.media-amazon.com/images/I/71nGDBsMW4L._SY695_.jpg' },
  ];

  return (
    <div className="bg-black text-white h-full">
      <ProductHeader />
      <div className="p-4 sm:p-8">
      <h2 className="bg-clip-text text-transparent text-center text-2xl sm:text-4xl font-extrabold my-4 sm:my-12 bg-slate-600">
        Men Collections
      </h2>
        <MenProductSection products={products} />
      </div>
    </div>
  );
};

export default Men;
