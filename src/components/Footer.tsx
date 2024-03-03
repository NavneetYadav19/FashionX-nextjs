import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 md:h-24 text-white p-4 sm:p-8 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        
        <div className="flex items-center">
          <h2 className="text-lg sm:text-3xl font-caveat border-y-2 border-yellow-300 md:mb-0 mb-2 font-bold mr-4 text-yellow-200">
            FashionX
          </h2>
        </div>

        
        <div className="text-center">
          <p className="text-gray-400">© 2024 FashionX by Navneet Yadav. All Rights Reserved.</p>
        </div>

        
        <div className="flex items-center space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="textlg md:text-md hover:text-blue-500" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-lg md:text-md hover:text-blue-400" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-smlg md:text-md hover:text-pink-500" />
          </a>
          
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-lg md:text-md hover:text-red-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
