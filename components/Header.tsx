import React, { useState, useEffect } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { motion, AnimatePresence } from 'framer-motion';
import GlobeIcon from './icons/GlobeIcon';
import DownloadIcon from './icons/DownloadIcon';

const Header: React.FC = () => {
  const { translations, toggleLanguage, language } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: translations.header.home },
    { href: '#about', label: translations.header.about },
    { href: '#skills', label: translations.header.skills },
    { href: '#projects', label: translations.header.projects },
    { href: '#contact', label: translations.header.contact },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl font-bold text-white hover:text-indigo-400 transition-colors">
            Tristan Kempes
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download="Tristan_Kempes_CV.pdf"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors text-sm"
          >
            <DownloadIcon className="w-4 h-4 mr-2" />
            {translations.header.downloadCV}
          </a>
          <button
            onClick={toggleLanguage}
            className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
            aria-label="Toggle language"
          >
            <GlobeIcon className="w-6 h-6 mr-1" />
            <span className="font-bold">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-sm"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-indigo-400 text-lg transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                  variants={linkVariants}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/cv.pdf"
                download="Tristan_Kempes_CV.pdf"
                className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
                variants={linkVariants}
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                {translations.header.downloadCV}
              </motion.a>
              <motion.button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center text-gray-300 hover:text-indigo-400 transition-colors"
                aria-label="Toggle language"
                variants={linkVariants}
              >
                <GlobeIcon className="w-6 h-6 mr-1" />
                <span className="font-bold">{language === 'es' ? 'EN' : 'ES'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;