import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Tacos al Pastor',
      description: 'Deliciosos tacos de carne de cerdo marinada, piña, cebolla y cilantro.',
      image: '/assets/taco-al-pastor.jpg',
    },
    {
      id: 2,
      name: 'Tacos de Carnitas',
      description: 'Suaves y jugosas carnitas de cerdo, con cebolla y cilantro.',
      image: '/assets/taco-carnitas.jpg',
    },
    {
      id: 3,
      name: 'Tacos de Suadero',
      description: 'Tierna carne de res cocinada a fuego lento, con cebolla y cilantro.',
      image: '/assets/taco-suadero.jpg',
    },
    {
      id: 4,
      name: 'Tacos de Birria',
      description: 'Sabrosa birria de chivo o res, acompañada de su consomé.',
      image: '/assets/taco-birria.jpg',
    },
  ];

  const promotions = [
    { day: 'Martes', offer: '2x1 en tacos al pastor', description: '¡No te pierdas esta increíble oferta!' },
    { day: 'Jueves', offer: 'Tacos de canasta gratis', description: 'En la compra de 3 tacos, llévate 1 de canasta.' },
    { day: 'Fin de Semana', offer: 'Paquete Familiar', description: '20 tacos a elegir + refresco grande por $250.' },
  ];

  return (
    <div className="relative" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navbar />

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/TUNUMERODETELEFONO" // Reemplaza con tu número de teléfono
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <MessageCircle size={35} />
      </motion.a>

      
      {/* Home Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/hero-bg.jpg)', backgroundAttachment: 'fixed' }}
      >
        
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <motion.div
            className="relative bottom-5 right-2 -translate-x-2 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.img
              src="/assets/owners.png"
              alt="Dueños del negocio"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            {/* <motion.div
              className="relative bg-white text-dark p-4 rounded-lg shadow-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <p className="text-lg font-semibold">“Somos familia, somos tradición”</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white -mb-2"></div>
            </motion.div>
            <motion.button
              className="bg-accent text-dark font-bold py-2 px-6 rounded-full shadow-md hover:bg-yellow-400 transition-colors duration-300"
              style={{ backgroundColor: colors.accent }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conócenos
            </motion.button> */}
          </motion.div>
        <div className="relative z-10 text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            Los mejores tacos <br /> de la ciudad
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05, backgroundColor: colors.secondary }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white text-xl md:text-2xl font-bold py-4 px-10 rounded-full shadow-lg uppercase tracking-wide"
            style={{ backgroundColor: colors.primary }}
          >
            Haz tu pedido ahora
          </motion.button>

        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20" style={{ backgroundColor: colors.light }}>
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12"
            style={{ color: colors.dark }}
          >
            Nuestro Menú
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white text-2xl font-bold">{item.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: colors.dark }}>{item.name}</h3>
                    <p className="text-gray-600" style={{ color: colors.text }}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-20 bg-primary" style={{ backgroundColor: colors.primary }}>
        <div className="container mx-auto px-6 text-white">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          >
            Promociones Especiales
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {promotions.map((promo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center border-b-4 border-accent"
                >
                  <h3 className="text-3xl font-bold mb-3" style={{ color: colors.dark }}>{promo.day}</h3>
                  <p className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>{promo.offer}</p>
                  <p className="text-gray-600" style={{ color: colors.text }}>{promo.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Delivery & Events Section */}
      <section id="delivery-events" className="py-20" style={{ backgroundColor: colors.light }}>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img
              src="/assets/delivery.jpg"
              alt="Servicio a domicilio"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: colors.dark }}>
              ¡Vamos hasta tu casa o evento especial!
            </h2>
            <p className="text-lg md:text-xl mb-8" style={{ color: colors.text }}>
              Llevamos el auténtico sabor de Taquería El Buen Sabor a tus reuniones, fiestas o simplemente a la comodidad de tu hogar. ¡Pregunta por nuestros paquetes especiales!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: colors.primary }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg uppercase tracking-wide"
              style={{ backgroundColor: colors.secondary }}
            >
              Cotizar ahora
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-20 bg-dark" style={{ backgroundColor: colors.dark }}>
        <div className="container mx-auto px-6 text-white">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          >
            Ubicación y Horarios
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-xl h-80 md:h-96"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5900000000002!2d-99.16870000000001!3d19.432600000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5f5f5f5%3A0x85d1ff35f5f5f5f5!2sEl%20Buen%20Sabor!5e0!3m2!1ses-419!2smx!4v1678901234567!5m2!1ses-419!2smx" // Reemplaza con la URL de tu ubicación
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Taquería El Buen Sabor"
              ></iframe>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl font-bold mb-4">Encuéntranos en:</h3>
              <p className="text-xl mb-6">Av. Siempre Viva #123, Colonia Centro, Ciudad de México</p>
              <h3 className="text-3xl font-bold mb-4">Horarios de Atención:</h3>
              <ul className="text-xl space-y-2">
                <li>Lunes a Viernes: 10:00 AM - 10:00 PM</li>
                <li>Sábados y Domingos: 11:00 AM - 11:00 PM</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: colors.light }}>
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-12"
            style={{ color: colors.dark }}
          >
            Síguenos en Redes Sociales
          </motion.h2>
          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://facebook.com/tacoselbuensabor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="w-16 h-16" />
            </motion.a>
            <motion.a
              href="https://instagram.com/tacoselbuensabor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="w-16 h-16" />
            </motion.a>
            <motion.a
              href="https://tiktok.com/@tacoselbuensabor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png" alt="TikTok" className="w-16 h-16" />
            </motion.a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;