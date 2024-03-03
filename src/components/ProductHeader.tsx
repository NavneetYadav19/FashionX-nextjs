import React from 'react';
import Link from 'next/link';

const ProductHeader: React.FC = () => {
  return (
    <header className="p-4 text-center flex flex-wrap md:space-x-[140px] justify-center sticky top-0 bg-black z-10">
      
      <Link href="/products" passHref>
        <div className="menu-item">All Products</div>
      </Link>

      
      <Link href="/products/men" passHref>
        <div className="menu-item">Men</div>
      </Link>

      
      <Link href="/products/women" passHref>
        <div className="menu-item">Women</div>
      </Link>

      
      <Link href="/products/kids" passHref>
        <div className="menu-item">Kids</div>
      </Link>

      
      <Link href="/products/sports" passHref>
        <div className="menu-item">Sports</div>
      </Link>

      <style jsx>{`
        .menu-item {
          margin: 0.5rem;
          cursor: pointer;
          font-size: 1.2rem;
          color: white;
          transition: color 0.3s;
        }

        .menu-item:hover {
          color: red;
        }
      `}</style>
    </header>
  );
};

export default ProductHeader;
