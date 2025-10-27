
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { translations } = useTranslations();

  return (
    <section id="about" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-white">{translations.about.title}</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
        <div className="max-w-3xl mx-auto text-gray-300 text-lg space-y-6 text-left md:text-justify">
          <p>{translations.about.paragraph1}</p>
          <p>{translations.about.paragraph2}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
