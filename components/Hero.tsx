import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { motion } from 'framer-motion';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';

const Hero: React.FC = () => {
  const { translations } = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] } 
    },
  };

  const heroLinks = [
    {
      href: 'https://www.linkedin.com/in/tristan-kempes-ares-685270333',
      label: translations.hero.links.linkedin,
      icon: <LinkedInIcon className="w-6 h-6" />
    },
    {
      href: 'https://github.com/tristank-fullstack',
      label: translations.hero.links.github,
      icon: <GitHubIcon className="w-6 h-6" />
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-indigo-400 font-medium mb-2">
          {translations.hero.greeting}
        </motion.p>
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-3">
          {translations.hero.name}.
        </motion.h1>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-gray-400 mb-6">
          {translations.hero.role}
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg mb-8">
          {translations.hero.description}
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          variants={containerVariants}
        >
          {heroLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-4 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105 text-white"
              variants={itemVariants}
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
