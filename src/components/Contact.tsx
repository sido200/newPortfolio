import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sidali20012017@outlook.com',
      href: 'mailto:sidali20012017@outlook.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+213 796672408',
      href: 'tel:+213796672408',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'alger, algerie',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sido200', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sidali-chouiref-b9ab5218a/', label: 'LinkedIn' },
   
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);
    setStatus('idle');

    try {
      // Configuration EmailJS (remplacez par vos vraies clés)
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Remplacez par votre Service ID
        'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Remplacez par votre Public Key
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-800" />
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-primary-100/30 to-purple-100/30 dark:from-primary-900/20 dark:to-purple-900/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Restons en{' '}
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              contact
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Vous avez un projet en tête ? Discutons ensemble de la façon dont nous pouvons le concrétiser
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Envoyez-moi un message
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="votre@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Sujet de votre message"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </motion.div>

                {/* Status Message */}
                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`flex items-center space-x-2 p-4 rounded-lg ${
                      status === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {status === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span className="text-sm font-medium">
                      {status === 'success'
                        ? 'Message envoyé avec succès ! Je vous répondrai rapidement.'
                        : 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.'}
                    </span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="group"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={info.href}
                    className="flex items-center space-x-4 p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-xl border border-gray-200/50 dark:border-gray-700/50 group-hover:border-primary-300/50 dark:group-hover:border-primary-600/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Suivez-moi
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gradient-to-r hover:from-primary-500/20 hover:to-purple-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl p-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="font-semibold mb-2">
                Prêt à démarrer votre projet ?
              </h4>
              <p className="text-white/90 text-sm">
                N'hésitez pas à me contacter pour discuter de vos idées. 
                Je réponds généralement sous 24h.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;