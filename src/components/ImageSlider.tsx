import React, { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const controls = useAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideImages = async (index: number) => {
    await controls.start(variants.hidden);
    setCurrentImageIndex(index);
    await controls.start(variants.visible);
  };

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        slideImages(nextIndex);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentImageIndex, images, variants, controls]);

  return (
    <motion.div className="slider" style={{ width: '100%', height: 'auto', maxHeight: '400px' }}>
      {images && images.length > 0 && (
        <img
          src={images[currentImageIndex]}
          alt={`slider-image-${currentImageIndex}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          className="object-cover w-full h-full"
        />
      )}
    </motion.div>
  );
};

export default ImageSlider;
