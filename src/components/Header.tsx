import React, { useState } from 'react';
import { FaGripLines, FaOpencart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="bg-black text-white px-12 p-4 flex items-center justify-between sticky top-0 z-50">
      <motion.div
        className="mr-24"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <button className="text-2xl" onClick={handleToggleSidebar}>
          <FaGripLines className='text-blue-50 hover:text-yellow-400' />
        </button>
      </motion.div>

      <motion.div
        className="text-center mr-20"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div>
          <Image src="/images/logo.png" alt="Logo" width={160} height={28} />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link href="/cart">
          <motion.div
            className="text-3xl"
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            <FaOpencart className='text-blue-50 hover:text-yellow-400' />
          </motion.div>
        </Link>
      </motion.div>

      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </header>
  );
};

export default Header;
