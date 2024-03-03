import React from 'react';
import { motion } from 'framer-motion';
import CustomerReviews from '../components/CustomerReviews';

const AboutPage: React.FC = () => {
  return (
    <div className='bg-[#FFC436]'>
      <motion.div
        className="mx-4 md:mx-[200px] py-16 md:space-x-24 flex flex-col md:flex-row"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        
        <motion.div
          className="w-full md:w-1/2 md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
            About <span className='text-[#862B0D] border-y-2 border-yellow-950'>FashionX</span>
          </h1>
          <motion.p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to FashionX Shopping, your ultimate destination for the latest trends in fashion and online shopping. At FashionX, we believe in making your shopping experience as stylish and enjoyable as the products we offer.
          </motion.p>

          <motion.p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Our curated collection includes a wide range of clothing, accessories, and more, carefully selected to keep you on the forefront of fashion. Explore, indulge, and elevate your fashion experience with us!
          </motion.p>
        </motion.div>

        
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <motion.img
            src="https://t3.ftcdn.net/jpg/04/80/67/94/360_F_480679467_aOlEq8fkXHFFVwVTBcTp9FVJiY67hNNM.jpg"
            alt="About FashionX"
            className="w-full h-auto rounded"
            style={{ opacity: 0.7 }}
            whileHover={{ scale: 1.1 }}
          />
        </motion.div>
      </motion.div>

      <CustomerReviews />
    </div>
  );
};

export default AboutPage;
