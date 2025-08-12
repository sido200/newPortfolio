import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import image from '../assets/WhatsApp Image 2025-08-12 à 17.29.48_ee81b66b.jpg';
const Hero: React.FC = () => {
  const skills = ['Développeur Full-Stack', 'Expert React & Node.js', 'Architecte Web', 'Passionné de Tech'];
  const typedText = useTypewriter(skills, 100, 50, 2000);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sido200', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sidali-chouiref-b9ab5218a/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-24 sm:mt-28 md:mt-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-primary-500 to-purple-500 p-2 animate-pulse-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    src={image}
                    alt="Sidali chouiref"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                JS
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                ⚛
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Salut, je suis{' '}
                <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
                 Sidali
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <span className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
                  {typedText}
                  <motion.span
                    
                    transition={{ duration: 0.8, }}
                    className="inline-block w-1 h-8 bg-primary-500 ml-2"
                  />
                </span>
              </div>
            </motion.div>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Je crée des expériences web exceptionnelles avec les technologies les plus modernes. 
              Passionné par l'innovation et l'excellence technique.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 border border-gray-200/20 dark:border-gray-700/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir mes projets
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;