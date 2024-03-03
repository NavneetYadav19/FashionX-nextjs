import React from 'react';
import ProductHeader from '../../components/ProductHeader';
import SportsProductSection from '../../components/SportsProductSection';

const Sports: React.FC = () => {
  const products = [
    { id: 10, name: "Adidas MU Jersey", price: 2499, image: 'https://m.media-amazon.com/images/I/81CZ8KRgIXL._SX679_.jpg' },
    { id: 11, name: "RCB Jersry", price: 1349, image: 'https://m.media-amazon.com/images/I/51vKFG4XEuL._SY741_.jpg' },
    { id: 12, name: "CSK Jersey", price: 899, image: 'https://m.media-amazon.com/images/I/51v0ItMjEoL._SX679_.jpg' },
    { id: 10, name: "RM Jersey", price: 2899, image: 'https://m.media-amazon.com/images/I/41IIUecW9BL._SX679_.jpg' },
    { id: 11, name: "Bayer Munich Jersey", price: 1899, image: 'https://m.media-amazon.com/images/I/41jxpqKbFqL.jpg' },
    { id: 12, name: "Cricket Shoe", price: 12999, image: 'https://m.media-amazon.com/images/I/617XQ+EPdLS._SX695_.jpg' },
    { id: 10, name: "Football Boots", price: 9972, image: 'https://m.media-amazon.com/images/I/71HlcD+yO1L._SY695_.jpg' },
    { id: 11, name: "Nivia Shoe", price: 5771, image: 'https://m.media-amazon.com/images/I/81sTyc7gEHL._SY695_.jpg' },
    { id: 12, name: "Volleyball", price: 19666, image: 'https://m.media-amazon.com/images/I/81qfvJteisL._SX679_.jpg' },
    { id: 10, name: "Football", price: 6899, image: 'https://m.media-amazon.com/images/I/61wblgAr1wL._SX679_.jpg' },
    { id: 11, name: "Basketball", price: 23566, image: 'https://m.media-amazon.com/images/I/51DxcyPyrFL._SX300_SY300_QL70_FMwebp_.jpg' },
    { id: 12, name: "Volleyball", price: 19666, image: 'https://m.media-amazon.com/images/I/81qfvJteisL._SX679_.jpg' },
    { id: 12, name: "GM Cricket Bat", price: 92775, image: 'https://m.media-amazon.com/images/I/51lvmhYtB+L._SX679_.jpg' },
    { id: 12, name: "Badminton Racket", price: 36345, image: 'https://m.media-amazon.com/images/I/41qFimddvcL._SX679_.jpg' },
    { id: 10, name: "Tennis Racket", price: 46729, image: 'https://m.media-amazon.com/images/I/514REwvE1jL._SX679_.jpg' },
    { id: 11, name: "Yoga Mat", price: 17344, image: 'https://m.media-amazon.com/images/I/317aIs9hXqL.jpg' },
  ];

  return (
    <div className="bg-black text-white h-full">
      <ProductHeader />
      <div className="p-4 sm:p-8">
        <h2 className="bg-clip-text text-transparent text-center text-2xl sm:text-4xl font-extrabold my-4 sm:my-12 bg-slate-600">
          Sports Collections
        </h2>
        <SportsProductSection products={products} />
      </div>
    </div>
  );
};

export default Sports;
