import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';  

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const handleClose = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <motion.div
      className={`fixed inset-y-0 left-0 w-64 bg-black overflow-x-hidden overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { translateX: 0 },
        closed: { translateX: '-100%' },
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 text-center">
        <Link href="/" passHref>
          <div onClick={handleClose} className="block my-12 text-2xl text-yellow-600 hover:border-b hover:border-red-600 mx-16 pb-2 cursor-pointer">Home</div>
        </Link>

        <Link href="/about" passHref>
          <div onClick={handleClose} className="block my-12 text-2xl text-yellow-600 hover:border-b hover:border-red-600 mx-16 pb-2 cursor-pointer">About</div>
        </Link>

        <Link href="/products" passHref>
          <div onClick={handleClose} className="block my-12 text-2xl text-yellow-600 hover:border-b hover:border-red-600 mx-16 pb-2 cursor-pointer">Products</div>
        </Link>

        <Link href="/contact" passHref>
          <div onClick={handleClose} className="block my-12 text-2xl text-yellow-600 hover:border-b hover:border-red-600 mx-16 pb-2 cursor-pointer">Contact</div>
        </Link>
        
        <div className="text-center ">
          <Image src="/images/logo.png" alt="Logo" width={360} height={48} />
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
