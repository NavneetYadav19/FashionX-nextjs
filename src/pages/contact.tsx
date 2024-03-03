import React from 'react';
import ContactCard from '../components/ContactCard';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-black md:h-[485px] justify-center p-4 sm:p-8">
      <ContactCard />
    </div>
  );
};

export default Contact;
