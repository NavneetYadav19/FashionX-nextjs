import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactCard: React.FC = () => {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  return (
    <motion.div
      className="bg-black p-4 border w-full md:h-[400px] h-[599px] rounded-lg shadow-lg mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
       
        <motion.input
          type="text"
          placeholder="Your Name"
          className={`bg-black w-full text-blue-100 my-8 p-2 focus:outline-none ${
            nameFocus ? 'border-b border-yellow-700' : 'border-b'
          } mb-2`}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className={`bg-black w-full text-blue-100 my-8 p-2 focus:outline-none ${
            emailFocus ? 'border-b border-yellow-700' : 'border-b'
          } mb-2`}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <motion.textarea
          placeholder="Your Message"
          className={`border-b bg-black w-full text-blue-100 my-8 p-2 focus:outline-none ${
            messageFocus ? 'border-yellow-700' : 'border-b'
          } mb-4`}
          onFocus={() => setMessageFocus(true)}
          onBlur={() => setMessageFocus(false)}
        />

       
        <motion.button
          className="bg-slate-500 text-white my-8 px-4 py-2 rounded-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ContactCard;
