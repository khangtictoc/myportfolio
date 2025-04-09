import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-8 text-center">
      <div className="container">
        <p>&copy; {currentYear} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 