import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Coffee, Code, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: Code, label: 'Projets réalisés', value: '50+' },
    { icon: Users, label: 'Clients satisfaits', value: '30+' },
    { icon: Award, label: 'Années d\'expérience', value: '5+' },
    { icon: Coffee, label: 'Cafés bus', value: '∞' },
  ];

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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900" />
      
      {/* Parallax Background Shape */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary-100/30 to-purple-100/30 dark:from-primary-900/20 dark:to-purple-900/20 rounded-full blur-3xl"
        style={{
          translateY: inView ? 0 : 100,
        }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white"
              >
                À propos de{' '}
                <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
                  moi
                </span>
              </motion.h2>
              
              <motion.div
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Développeur full-stack passionné avec plus de 5 ans d'expérience dans la création 
              d'applications web modernes et performantes. Je me spécialise dans les technologies 
              JavaScript/TypeScript, avec une expertise particulière en React, Node.js et les 
              architectures cloud.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Mon approche combine créativité et rigueur technique pour livrer des solutions 
              qui dépassent les attentes. Je suis constamment à l'affût des dernières innovations 
              technologiques pour offrir les meilleures expériences utilisateur.
            </motion.p>

            {/* Technologies */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Technologies favorites
              </h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'Docker'].map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 text-center group-hover:border-primary-300/50 dark:group-hover:border-primary-600/50 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl mb-4">
                    <stat.icon className="text-white" size={24} />
                  </div>
                  
                  <motion.div
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;