import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
             Chouiref sidali
            </h3>
            <p className="text-gray-400 mt-2">Développeur Full-Stack</p>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="text-lg italic text-gray-300">
              "Le code est une forme d'art moderne. Chaque ligne écrite avec passion 
              contribue à façonner l'avenir numérique."
            </blockquote>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="border-t border-gray-800 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm flex items-center">
                © 2025 Chouiref sidali. Fait avec{' '}
                <Heart 
                  size={16} 
                  className="text-red-500 mx-1 animate-pulse" 
                />{' '}
                à alger
              </p>
              
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">
                  Développé avec React + TypeScript + Framer Motion
                </span>
                
                {/* Back to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  className="p-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;