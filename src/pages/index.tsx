import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ImageSlider from '../components/ImageSlider';
import CategorySection from '../components/CategorySection';
import NewArrivalsSection from '../components/NewArrivalsSection';
import CartPage from '../components/CartPage';

const Home: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setIsInitialLoad(true);
    setShowCart(false);

    return () => {
      setIsInitialLoad(true);
      setShowCart(false);
    };
  }, []);

  const sliderImages = [
    'https://sslimages.shoppersstop.com/sys-master/root/h06/ha6/31774033772574/Main-Banner-Static-Web-1840x500_Eoss-23.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/ha6/h30/32097851605022/Sketchers-web_A4.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/h01/h3c/32097850556446/Force-web_a12.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/h50/h37/32004481515550/adidas%2C-puma-web_618.jpg',
    'https://sslimages.shoppersstop.com/sys-master/root/h7e/hcd/32124866199582/Kazo-web_1092024keo.jpg',
  ];

  const categories = [
    {
      category: 'OUR BRANDS',
      images: [
        'https://i.pinimg.com/originals/f6/15/50/f61550c942a8c483bd920371effa2865.gif',
        'https://gifdb.com/images/high/nike-text-logo-animation-8hztheflutey4ag5.gif',
        'https://i.pinimg.com/originals/e8/5d/22/e85d22b3e4d48944de66184b61a95435.gif',
        'https://i.makeagif.com/media/12-09-2015/15v7qo.gif',
        'https://cdnb.artstation.com/p/assets/images/images/027/487/741/original/daniel-reiter-optimizedrolexgif.gif?1591690237',
        'https://cdn.dribbble.com/users/930464/screenshots/20603370/f19a6d1d-63db-4e50-896e-9db20c53e1bb.gif',
      ],
    },
  ];

  const newArrivals = [
    {
      name: 'Men Kurta',
      image: 'https://manyavar.scene7.com/is/image/manyavar/HP_vibe_T8_D_revised2_26-07-2023-06-51?$WT_HP_Vibe%2FTrending_D$',
      price: 2539,
    },
    {
      name: "Traditional Sarees",
      image: 'https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw0d46a098/images/feeds/UC107649.jpg',
      price: 3265,
    },
    {
      name: 'Roadster Men Shirt',
      image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg',
      price: 784,
    },
    {
      name: 'Men Sweatshirts',
      image: 'https://imagescdn.planetfashion.in/img/app/product/6/649062-6526800.jpg?auto=format&w=494.40000000000003',
      price: 1090,
    },
    {
      name: 'Nike Shoes',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c9417d8a-950c-4502-893e-92b03050f08f/city-rep-tr-workout-shoes-djC0DF.png',
      price: 4748,
    },
  ];

  return (
    <div className="bg-black h-full">
      <motion.div
        initial={isInitialLoad ? { y: -500, opacity: 0 } : {}}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        onAnimationComplete={() => setIsInitialLoad(false)}
      >
        <ImageSlider images={sliderImages} />
      </motion.div>

      {categories.map((categoryData, index) => (
        <motion.div
          key={index}
          initial={isInitialLoad ? { y: -500, opacity: 0 } : {}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <CategorySection
            category={categoryData.category}
            images={categoryData.images}
          />
        </motion.div>
      ))}

      <motion.div
        initial={isInitialLoad ? { y: -500, opacity: 0 } : {}}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.8 }}
      >
        <NewArrivalsSection products={newArrivals} />
      </motion.div>

      {showCart && (
        <motion.div
          initial={isInitialLoad ? { y: -500, opacity: 0 } : {}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3.8 }}
        >
          <CartPage products={newArrivals} />
        </motion.div>
      )}

      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? 'Hide Cart' : 'Show Cart'}
      </button>
    </div>
  );
};

export default Home;
