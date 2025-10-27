import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { motion } from 'framer-motion';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';

const Contact: React.FC = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactLinks = [
    {
      href: 'https://www.linkedin.com/in/tristan-kempes-ares-685270333',
      label: translations.contact.links.linkedin,
      icon: <LinkedInIcon className="w-7 h-7" />
    },
    {
      href: 'https://github.com/tristank-fullstack',
      label: translations.contact.links.github,
      icon: <GitHubIcon className="w-7 h-7" />
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-white">{translations.contact.title}</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
        <p className="max-w-xl mx-auto text-gray-300 text-lg mb-12">{translations.contact.subtitle}</p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full sm:w-auto gap-3 py-3 px-6 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105 text-white"
            variants={itemVariants}
          >
            {link.icon}
            <span className="font-medium">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
      
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a 
          href={`mailto:${translations.contact.emailText}`}
          className="text-lg text-indigo-300 font-mono tracking-wider hover:text-indigo-200 hover:underline transition-colors"
        >
          {translations.contact.emailText}
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;