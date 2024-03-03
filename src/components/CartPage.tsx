// components/CartPage.tsx

import React, { useEffect } from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { BiRupee } from 'react-icons/bi';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router';

interface Product {
  name: string;
  image: string;
  price: number;
}

const CartPage: React.FC<{ products: Product[] }> = ({ products }) => {
  const { cartItems, addToCart, removeFromCart, decrementQuantity } = useCart();
  const router = useRouter();

  // Constants for GST and discount percentages
  const GST_PERCENTAGE = 18;
  const DISCOUNT_PERCENTAGE = 5;

  // Calculate total price including GST and discount
  const totalPriceWithoutGST = Object.values(cartItems).reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0
  );

  const GST = (totalPriceWithoutGST * GST_PERCENTAGE) / 100;
  const discount = (totalPriceWithoutGST * DISCOUNT_PERCENTAGE) / 100;

  const grandTotal = totalPriceWithoutGST + GST - discount;

  // Use useEffect to run client-side code after the component has mounted
  useEffect(() => {
    // Check if the cart is empty and redirect to the home page if true
    if (Object.keys(cartItems).length === 0) {
      router.push('/');
    }
  }, [cartItems, router]);

  // Return null to prevent rendering of the cart content during server-side rendering
  if (Object.keys(cartItems).length === 0) {
    return null;
  }

  return (
    <div className="p-4 sm:p-8">
      {/* Display cart items here */}
      {Object.keys(cartItems).map((itemName, index) => {
        const { product, quantity } = cartItems[itemName];

        return (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-slate-900 justify-between p-4 border-b border-gray-700 mb-4"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg mb-4 sm:mb-0 mx-auto sm:mx-0"
            />

            {/* Product Name and Quantity */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:ml-4">
              <div className="space-y-2 sm:space-y-0 sm:mr-4">
                <p className="text-lg sm:text-xl text-white font-semibold mb-2 sm:mb-0">{product.name}</p>
                <p className="text-sm sm:text-base text-slate-200">Quantity: {quantity}</p>
              </div>
            </div>

            {/* Product Price and Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:gap-96 w-full sm:ml-4">
              <p className="flex my-4 md:my-0 text-lg sm:text-xl text-gray-500 mb-2 sm:mb-0">
                Price: <BiRupee className="mt-1 text-xl sm:text-2xl font-extrabold text-blue-600" />
                {product.price}
              </p>
              <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                <button
                  onClick={() => decrementQuantity(itemName)}
                  className="px-2 py-1 bg-yellow-500 text-gray-900 rounded-l-sm focus:outline-none"
                >
                  <FaMinus />
                </button>
                <button
                  onClick={() => addToCart(itemName, product)}
                  className="px-2 py-1 bg-yellow-500 text-gray-900 rounded-r-sm focus:outline-none"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeFromCart(itemName, true)}
                  className="px-2 py-1 bg-red-500 text-gray-900 rounded-sm focus:outline-none"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Display Total Price, GST, Discount, and Grand Total in separate rows */}
      <div className="mt-4">
        <div className="flex justify-end mb-2">
          <p className="text-lg flex font-semibold">
            Total Price: <BiRupee className="mt-1 text-xl sm:text-2xl mx-2 text-blue-800" />
            {totalPriceWithoutGST.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-end mb-2">
          <p className="text-lg flex font-semibold">
            GST ({GST_PERCENTAGE}%): <BiRupee className="mt-1 text-xl sm:text-2xl mx-2 text-blue-800" />
            {GST.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-end mb-2">
          <p className="text-lg flex font-semibold">
            Discount ({DISCOUNT_PERCENTAGE}%): <BiRupee className="mt-1 text-xl sm:text-2xl mx-2 text-blue-800" />
            {discount.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-end">
          <p className="text-lg flex font-semibold">
            Grand Total: <BiRupee className="mt-1 text-xl sm:text-2xl mx-2 text-blue-800" />
            {grandTotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
