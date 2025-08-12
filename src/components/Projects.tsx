import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter } from 'lucide-react';
import proj1 from "../assets/image.webp"
import proj2 from "../assets/image2.png"
import proj3 from "../assets/image3.jpeg"
import proj4 from "../assets/image4.jpeg"

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'drbio7',
      description: 'site e-commerce ',
      longDescription: 'Un site e-commerce complète développée avec Nextjs et Node.js',
      image: proj1,
      technologies: ['Nextjs', 'Node.js'],
      category: 'fullstack',
      liveUrl: 'https://drbio7.com/fr',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Omnicanal',
      description: 'site vitrine',
      longDescription: 'Application de productivité permettant la gestion de tâches en équipe, avec notifications en temps réel, système de permissions et intégrations multiples.',
      image: proj2,
      technologies: ['React', 'netlify', 'strapi'],
      category: 'frontend',
      liveUrl: 'https://transcendent-kitten-5477ea.netlify.app/',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'API Analytics Dashboard',
      description: 'Dashboard analytics pour APIs REST',
      longDescription: 'Tableau de bord complet pour monitorer et analyser les performances des APIs, avec graphiques interactifs et alertes automatiques.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
      technologies: ['Express', 'MongoDB', 'Redis', 'Chart.js'],
      category: 'backend',
      liveUrl: '/',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile harmonya',
      description: 'Application reservation',
      longDescription: 'Application mobile de reservation de coiffieur ',
      image: 'https://images.pexels.com/photos/3183146/pexels-photo-3183146.jpeg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      category: 'mobile',
      liveUrl: '/',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 5,
      title: 'symindustrie',
      description: 'Plateforme vente d\'outilage ',
      longDescription: 'Plateforme immobilière complète avec système de recherche géolocalisée, visite virtuelle 360° et système de mise en relation automatique.',
      image: proj3,
      technologies: ['react.js', 'express'],
      category: 'fullstack',
      liveUrl: 'https://www.symindustrie.com/',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'AI Heart attack ',
      description: 'prediction Heart attack',
      longDescription: 'Outil de génération de contenu utilisant l\'intelligence artificielle pour créer du texte, des images et du code de manière automatisée.',
      image: proj4,
      technologies: ['Python'],
      category: 'ai',
      liveUrl: 'https://colab.research.google.com/drive/1yKkhxGY_l7yXbX7apNA8JummXMFXFLZV#scrollTo=TYHtWy8r8CfL&uniqifier=1',
      githubUrl: 'https://github.com',
      featured: true,
    },
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', count: projects.length },
    { id: 'fullstack', label: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'IA & ML', count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
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
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900" />

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
              Projets
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations les plus récentes et innovantes
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter size={16} />
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === category.id 
                  ? 'bg-white/20' 
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-300/50 dark:hover:border-primary-600/50 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Voir plus
                    </motion.button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100/60 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    ×
                  </button>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Liens</h4>
                      <div className="space-y-2">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                        >
                          <ExternalLink size={16} />
                          <span>Voir le projet</span>
                        </a>
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                        >
                          <Github size={16} />
                          <span>Code source</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;