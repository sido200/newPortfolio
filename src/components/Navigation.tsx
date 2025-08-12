import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const scrollProgress = useScrollProgress();

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollProgress }}
        initial={{ scaleX: 0 }}
      />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              className="text-xl font-display font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SC.
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium py-2"
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navigation;