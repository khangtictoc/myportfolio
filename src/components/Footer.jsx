import React from 'react';
import personal from '../data/personal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-8 text-center">
      <div className="container">
        <p>&copy; {currentYear} {personal.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 