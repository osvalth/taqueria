import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // ¡Aquí está el ingrediente que faltaba!
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { colors } from '../theme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: 'home' },
    { name: 'Menú', path: 'menu' },
    { name: 'Promociones', path: 'promotions' },
    { name: 'Ubicación', path: 'location' },
    { name: 'Contacto', path: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg py-4 px-6 md:px-12"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Taquería El Buen Sabor Logo" className="h-10 mr-3" />
          <span className="text-2xl font-bold" style={{ color: colors.dark }}>Taquería El Buen Sabor</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.path)}
              className="text-lg font-semibold hover:text-primary transition-colors duration-300"
              style={{ color: colors.text }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-dark focus:outline-none">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.path)}
                  className="text-xl font-semibold py-2 w-full text-center hover:bg-gray-100 transition-colors duration-300"
                  style={{ color: colors.dark }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;