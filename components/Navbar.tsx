import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navbar transparent logic: Only on home page, when not scrolled and menu is closed.
  const isTransparent = isHome && !scrolled && !isOpen;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-md py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
             <img 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScriNeWccwUKwIKOl0xpqDgNK0UpqnVCT-TK7a_LG8Og&s" 
               alt="The Greenway Church" 
               className="h-14 w-auto rounded-lg shadow-sm bg-white"
             />
             <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight hidden sm:block ${
               isTransparent ? 'text-white drop-shadow-md' : 'text-greenway-900'
             }`}>
               The Greenway Church
             </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-greenway-500 ${
                  isTransparent ? 'text-white/90 hover:text-white drop-shadow-sm' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              variant={isTransparent ? 'white' : 'primary'} 
              size="sm"
              onClick={() => window.location.hash = '#/give'}
            >
              Give Online
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isTransparent ? 'text-white' : 'text-gray-700'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-gray-100 top-20 left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-greenway-800 hover:bg-greenway-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Button className="w-full justify-center" onClick={() => window.location.hash = '#/give'}>
                Give Online
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;