import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navigation items array including Contact
  const navItems = ['about', 'tech-stack', 'achievement', 'education', 'project', 'contact'];

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-custom-light' : 'bg-transparent'}`}>
      <div className="container">
        <nav className="flex justify-between items-center min-h-[80px]">
          <div className="text-2xl font-bold text-primary">Portfolio</div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <li key={item} className="relative">
                <a 
                  href={`#${item}`} 
                  className="font-medium text-text-primary hover:text-primary relative py-1 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-text-primary mb-1.5 transition-all ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-text-primary mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-text-primary transition-all ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`absolute top-[80px] left-0 w-full md:hidden bg-white shadow-custom-light transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <ul className="flex flex-col items-center py-5">
          {navItems.map((item, index) => (
            <li key={item} className={`py-4 opacity-0 ${isOpen ? `animate-[navFadeIn_0.5s_ease_forwards_${index * 0.1 + 0.3}s]` : ''}`}>
              <a 
                href={`#${item}`} 
                onClick={closeMenu}
                className="font-medium text-text-primary hover:text-primary transition-all duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header; 