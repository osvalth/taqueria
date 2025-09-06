import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../theme';

const Footer = () => {
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
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-dark py-12"
      style={{ backgroundColor: colors.dark }}
    >
      <div className="container mx-auto px-6 text-center text-light">
        <img src="/assets/logo.png" alt="Taquería El Buen Sabor Logo" className="h-12 mx-auto mb-6" />
        <p className="text-lg mb-4">&copy; {new Date().getFullYear()} Taquería El Buen Sabor. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6 mb-6">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.path)}
              className="text-md font-medium hover:text-primary transition-colors duration-300"
              style={{ color: colors.light }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>
        <p className="text-sm" style={{ color: colors.text }}>Hecho con ❤️ y mucho sabor.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;