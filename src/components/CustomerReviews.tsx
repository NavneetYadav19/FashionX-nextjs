import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    review:
      'Excellent shopping experience! The products are of high quality, and the service is top-notch.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 4,
    review:
      'FashionX has a great selection of trendy items. I love the variety and the competitive prices.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    rating: 3,
    review: 'Average experience. The delivery was a bit delayed, but overall, the products are okay.',
  },
  {
    id: 4,
    name: 'Bob Williams',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    rating: 5,
    review: 'Amazing products! Fast delivery and excellent customer service.',
  },
  {
    id: 5,
    name: 'Eva Davis',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    rating: 4,
    review: 'Great variety of styles. Enjoyed my shopping experience at FashionX.',
  },
  {
    id: 6,
    name: 'Mike Johnson',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    rating: 3,
    review: 'Good quality products, but the prices could be more competitive.',
  },
];

const CustomerReviews: React.FC = () => {
  const [visibleReviews, setVisibleReviews] = useState(reviews.slice(0, 3));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleReviews((prevReviews) => [
        ...prevReviews.slice(1),
        reviews[(prevReviews[2]?.id || 0) % reviews.length],
      ]);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-8 p-4 md:p-12">
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <AnimatePresence>
          {visibleReviews.map((review) => (
            <motion.div
              key={review.id}
              className="w-full md:w-1/3 p-4 border rounded-md bg-slate-800 shadow-lg shadow-red-600"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mb-4 mx-auto" />
              <p className="text-gray-400 mb-2 text-center md:text-left">{review.review}</p>
              <div className="flex justify-center md:justify-start">
                {Array.from({ length: review.rating }, (_, index) => (
                  <span key={index} className="text-yellow-500 pr-1">&#9733;</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CustomerReviews;
