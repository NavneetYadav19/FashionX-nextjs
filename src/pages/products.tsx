import React from 'react';
import ProductHeader from '../components/ProductHeader';
import AllProductsSection from '../components/AllProductsSection';

const Products: React.FC = () => {
  const products = [
    { id: 1, name: "Men's T-Shirt", price: 879, image: 'https://assets.ajio.com/medias/sys_master/root/20230324/vt3C/641d4476711cf97ba7ec3457/netplay_maroon_slim_fit_polo_t-shirt.jpg' },
    { id: 2, name: "Men's Shirt", price: 1399, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/1/i/i/l-22147766-wrogn-original-imagpu34twbrgccq.jpeg?q=90&crop=false' },
    { id: 3, name: "Boys Polo", price: 649, image: 'https://m.media-amazon.com/images/I/71lvUO9DVZL._SY879_.jpg' },
    { id: 4, name: "Girls Tshirt", price: 799, image: 'https://m.media-amazon.com/images/I/41byuwR1zhL._SX679_.jpg' },
    { id: 5, name: "Women's Kurta", price: 1249, image: 'https://m.media-amazon.com/images/I/81Qcku-ftsL._SY879_.jpg' },
    { id: 6, name: "Women's Top", price: 999, image: 'https://m.media-amazon.com/images/I/51STzgHk8LL.jpg' },
    { id: 7, name: "Silk Sarees", price: 2639, image: 'https://m.media-amazon.com/images/I/81kPrapc9kL._SY879_.jpg' },
    { id: 8, name: "Salwar Suit", price: 1399, image: 'https://m.media-amazon.com/images/I/91n5s+BPQSL._SY879_.jpg' },
    { id: 9, name: "Mens Running Shoe", price: 69.99, image: 'https://m.media-amazon.com/images/I/51DCSGvByeL._SY695_.jpg' },
    { id: 10, name: "Womens Shoe", price: 39.99, image: 'https://m.media-amazon.com/images/I/81bFH5Ucr0L._SX695_.jpg' },
    { id: 11, name: "Kids Comfortable Clogs", price: 59.99, image: 'https://m.media-amazon.com/images/I/71Gv54RCcVL._SY695_.jpg' },
    { id: 12, name: "Puma Football Shoe", price: 49.99, image: 'https://m.media-amazon.com/images/I/61q17ZvNyyL._SY695_.jpg' },
    
  ];

  return (  
    <div className="bg-black text-white h-full">
      <ProductHeader />
      <div className="p-4 sm:p-8">
        <h2 className="bg-clip-text text-transparent text-center text-2xl sm:text-4xl font-extrabold my-4 sm:my-12 bg-slate-600">
          All Products
        </h2>
        {products && <AllProductsSection products={products} />}
      </div>
    </div>
  );
};

export default Products;
