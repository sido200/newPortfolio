import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette,
  Server,
  Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js'],
      color: 'from-blue-500 to-cyan-500',
      description: 'Interfaces modernes et réactives'
    },
    {
      icon: Server,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'NestJS', 'Python'],
      color: 'from-green-500 to-emerald-500',
      description: 'APIs robustes et sécurisées'
    },
    {
      icon: Database,
      title: 'Base de données',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
      color: 'from-purple-500 to-violet-500',
      description: 'Gestion optimisée des données'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      color: 'from-orange-500 to-red-500',
      description: 'Déploiement et infrastructure'
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      skills: ['React Native', 'Flutter', 'PWA', 'Ionic'],
      color: 'from-pink-500 to-rose-500',
      description: 'Applications multiplateformes'
    },
    {
      icon: Palette,
      title: 'Design',
      skills: ['Figma', 'Tailwind CSS', 'Framer Motion', 'SCSS'],
      color: 'from-indigo-500 to-purple-500',
      description: 'Expériences utilisateur élégantes'
    },
    {
      icon: Globe,
      title: 'Web Performance',
      skills: ['Optimisation', 'SEO', 'Lighthouse', 'Analytics'],
      color: 'from-teal-500 to-green-500',
      description: 'Sites rapides et optimisés'
    },
    {
      icon: Zap,
      title: 'Outils & Autres',
      skills: ['Git', 'Webpack', 'Vite', 'Testing'],
      color: 'from-yellow-500 to-orange-500',
      description: 'Workflow et productivité'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-800" />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-200/20 to-purple-200/20 dark:from-primary-800/20 dark:to-purple-800/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Mes{' '}
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Une expertise technique complète pour créer des solutions web innovantes et performantes
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              {/* Card Background with Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
              
              {/* Card Content */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 group-hover:border-transparent transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.1 * index + 0.05 * skillIndex 
                      }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <motion.div
                  className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                >
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>Maîtrise</span>
                    <span>Expert</span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: '90%' } : { width: 0 }}
                      transition={{ duration: 1.5, delay: 0.3 * index }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Prêt à transformer vos idées en réalité numérique ?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Discutons de votre projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;