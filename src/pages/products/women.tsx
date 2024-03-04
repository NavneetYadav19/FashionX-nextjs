import React from 'react';
import ProductHeader from '../../components/ProductHeader';
import WomenProductSection from '../../components/WomenProductSection';

const Women: React.FC = () => {
  const products = [
    { id: 25, name: "Women's Cotton Kurta", price: 759, image: 'https://m.media-amazon.com/images/I/81nfm3ucWaL._SY879_.jpg' },
    { id: 26, name: "Women's T-shirts", price: 499, image: 'https://m.media-amazon.com/images/I/51-9sNBogtL._SX679_.jpg' },
    { id: 27, name: "Women's Kurta", price: 3369, image: 'https://m.media-amazon.com/images/I/71BKr4P5nZL._SY879_.jpg' },
    { id: 28, name: "Women's Saree", price: 5700, image: 'https://m.media-amazon.com/images/I/61R5JwWc8rL._SY879_.jpg' },
    { id: 29, name: "Women's jamdani saree", price: 2469, image: 'https://m.media-amazon.com/images/I/81rmnbPjd-L._SY879_.jpg' },
    { id: 30, name: "Kanjivaram saree", price: 2599, image: 'https://m.media-amazon.com/images/I/81eXc2+7A5L._SY879_.jpg' },
    { id: 31, name: "Women's Salwar Suit", price: 6965, image: 'https://m.media-amazon.com/images/I/81T-RD-zZ5L._SY879_.jpg' },
    { id: 32, name: "Women's Dress", price: 799, image: 'https://m.media-amazon.com/images/I/61iDnKNrR+L._SX679_.jpg' },
    { id: 33, name: "Women's Sandal", price: 176879, image: 'https://m.media-amazon.com/images/I/81PqunLwxCL._SX695_.jpg' },
    { id: 34, name: "Fashion Sandals", price: 5000, image: 'https://m.media-amazon.com/images/I/71wmCKfCN4L._SX695_.jpg' },
    { id: 35, name: "Ethnic Footwear", price: 1597, image: 'https://m.media-amazon.com/images/I/61LfhWYYaFL._SY695_.jpg' },
    { id: 36, name: "Women's Shoes", price: 679, image: 'https://m.media-amazon.com/images/I/6188O0UwR-L._SY695_.jpg' },
  ];

  return (
    <div className="bg-black text-white h-full">
      <ProductHeader />
      <div className="p-4 sm:p-8">
      <h2 className="bg-clip-text text-transparent text-center text-2xl sm:text-4xl font-extrabold my-4 sm:my-12 bg-slate-600">
        Women Collections
      </h2>
        <WomenProductSection products={products} />
      </div>
    </div>
  );
};

export default Women;
