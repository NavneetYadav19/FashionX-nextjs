import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Product {
  name: string;
  image: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextProps {
  cartItems: { [key: string]: CartItem };
  addToCart: (itemName: string, product: Product) => void;
  removeFromCart: (itemName: string) => void;
  decrementQuantity: (itemName: string) => void; 
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<{ [key: string]: CartItem }>({});

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemName: string, product: Product) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemName]: {
        product,
        quantity: (prevItems[itemName]?.quantity || 0) + 1,
      },
    }));
  };

  const removeFromCart = (itemName: string) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[itemName];
      return updatedItems;
    });
  };

  const decrementQuantity = (itemName: string) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[itemName] && updatedItems[itemName].quantity > 0) {
        updatedItems[itemName].quantity--;
      }
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
