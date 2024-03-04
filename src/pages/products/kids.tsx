import React from 'react';
import ProductHeader from '../../components/ProductHeader';
import KidsProductSection from '../../components/KidsProductSection';

const Kids: React.FC = () => {
  const products = [
    { id: 7, name: "Girls Casual Top", price: 560, image: 'https://m.media-amazon.com/images/I/613GmiscIOL._SX679_.jpg' },
    { id: 8, name: "Girl's Shirt", price: 629, image: 'https://m.media-amazon.com/images/I/61KWJRLOmwL._SY741_.jpg' },
    { id: 9, name: "Boys T-Shirt", price: 660, image: 'https://m.media-amazon.com/images/I/717ShtfibHL._SY879_.jpg' },
    { id: 10, name: "Boys Shirt", price: 499, image: 'https://m.media-amazon.com/images/I/61Heq2WlLlL._SY879_.jpg' },
    { id: 11, name: "Kids' Jacket", price: 889, image: 'https://m.media-amazon.com/images/I/61eU-2gSbgL._SX679_.jpg' },
    { id: 12, name: "Boys Set", price: 659, image: 'https://m.media-amazon.com/images/I/61j6eaBdo6L._SX679_.jpg' },
    { id: 13, name: "Girls Set", price: 875, image: 'https://m.media-amazon.com/images/I/51mYgZoc6BL._SY741_.jpg' },
    { id: 14, name: "Baby Girls set", price: 453, image: 'https://m.media-amazon.com/images/I/51B3BlCylxL._SX679_.jpg' },
    { id: 15, name: "Clogs for Kids", price: 499, image: 'https://m.media-amazon.com/images/I/71r6Y8m1xgL._SY695_.jpg' },
    { id: 16, name: "Kids' Shoe", price: 399, image: 'https://m.media-amazon.com/images/I/51Chb3ckc6L._SX695_.jpg' },
    { id: 17, name: "Socks Soft Sole", price: 199, image: 'https://m.media-amazon.com/images/I/71YOEaNa4AL._SX679_.jpg' },
    { id: 18, name: "Mickey Mouse Shoe", price: 2784, image: 'https://m.media-amazon.com/images/I/818d0GNx-XL._SX695_.jpg' },
  ];

  return (
    <div className="bg-black text-white h-full">
      <ProductHeader />
      <div className="p-4 sm:p-8">
        <h2 className="bg-clip-text text-transparent text-center text-2xl sm:text-4xl font-extrabold my-4 sm:my-12 bg-slate-600">
          Kids Collections
        </h2>
        <KidsProductSection products={products} />
      </div>
    </div>
  );
};

export default Kids;
