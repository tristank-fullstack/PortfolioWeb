
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { motion } from 'framer-motion';
import DownloadIcon from './icons/DownloadIcon';

const Resume: React.FC = () => {
  const { translations } = useTranslations();

  return (
    <section id="resume" className="py-20 md:py-32 bg-gray-800/50">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-white">{translations.resume.title}</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
        <p className="max-w-xl mx-auto text-gray-300 text-lg mb-10">{translations.resume.cta}</p>
        <a
          href="/cv.pdf"
          download="Tristan_Kempes_CV.pdf"
          className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50 text-lg"
        >
          <DownloadIcon className="w-6 h-6 mr-3" />
          {translations.resume.button}
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;
