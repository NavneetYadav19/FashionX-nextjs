import React from 'react';
import { FaIndianRupeeSign, FaPlus, FaMinus } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

interface Product {
  name: string;
  image: string;
  price: number;
}

interface NewArrivalsSectionProps {
  products: Product[];
}

const productCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const NewArrivalsSection: React.FC<NewArrivalsSectionProps> = ({ products }) => {
  const { addToCart, decrementQuantity, cartItems } = useCart();

  const isProductInCart = (productName: string) => {
    return cartItems[productName] && cartItems[productName].quantity > 0;
  };

  return (
    <div className="text-white text-center md:mx-8 mt-8 sm:mt-24">
      <h2 className="bg-clip-text text-transparent text-2xl sm:text-4xl font-extrabold my-4 sm:my-12 bg-slate-600">
        New Arrivals
      </h2>
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 lg:space-x-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="m-4 bg-gray-800 p-6 rounded-lg text-left flex flex-col items-center"
            variants={productCardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-lg mb-4"
              whileHover={{ scale: 1.1 }}
            />
            <motion.h3
              className="text-xl sm:text-2xl font-semibold"
              whileHover={{ color: '#FFD700' }}
            >
              {product.name}
            </motion.h3>
            <motion.p
              className="flex text-blue-50 my-2 sm:my-5 text-lg sm:text-xl font-bold"
            >
              <FaIndianRupeeSign className='mt-1 text-blue-500 mr-2' /> {product.price}
            </motion.p>
            {isProductInCart(product.name) ? (
              <div className="flex items-center">
                <motion.button
                  onClick={() => decrementQuantity(product.name)}
                  className="px-2 py-1 bg-yellow-500 text-gray-900 rounded-l-sm focus:outline-none"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaMinus />
                </motion.button>
                <motion.p className="mx-2 sm:mx-4">{cartItems[product.name].quantity}</motion.p>
                <motion.button
                  onClick={() => addToCart(product.name, product)}
                  className="px-2 py-1 bg-yellow-500 text-gray-900 rounded-r-sm focus:outline-none"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaPlus />
                </motion.button>
              </div>
            ) : (
              <motion.button
                onClick={() => addToCart(product.name, product)}
                className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-sm font-medium focus:outline-none mt-2 sm:mt-0"
                whileHover={{ scale: 1.1 }}
              >
                {' Add to Cart'}
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsSection;
