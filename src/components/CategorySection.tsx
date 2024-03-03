import React from 'react';
import { motion } from 'framer-motion';

interface CategorySectionProps {
  category: string;
  images: string[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, images }) => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl sm:text-4xl font-extrabold my-4 sm:my-12">
        <span className="bg-clip-text text-transparent bg-slate-600">
          {category}
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-12">
        {images.map((imageUrl, index) => (
          <motion.div
            key={index}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden cursor-pointer transform hover:scale-110 transition-transform duration-300"
          >
            <img
              src={imageUrl}
              alt={`category-${index}`}
              className="w-full h-full rounded-full border-4 border-yellow-500 shadow-xl shadow-red-600"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
