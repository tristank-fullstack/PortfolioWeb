import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { motion } from 'framer-motion';
import JavaIcon from './icons/JavaIcon';
import KotlinIcon from './icons/KotlinIcon';
import SpringBootIcon from './icons/SpringBootIcon';
import FirebaseIcon from './icons/FirebaseIcon';
import ReactIcon from './icons/ReactIcon';
import NextjsIcon from './icons/NextjsIcon';
import TailwindCssIcon from './icons/TailwindCssIcon';
import HtmlIcon from './icons/HtmlIcon';
import CssIcon from './icons/CssIcon';
import JavaScriptIcon from './icons/JavaScriptIcon';
import DockerIcon from './icons/DockerIcon';
import MySqlIcon from './icons/MySqlIcon';
import MongoDbIcon from './icons/MongoDbIcon';
import WordPressIcon from './icons/WordPressIcon';
import ExcelIcon from './icons/ExcelIcon';
import OdooIcon from './icons/OdooIcon';
import SnipeItIcon from './icons/SnipeItIcon';
import PipedriveIcon from './icons/PipedriveIcon';

const skills = [
  { name: 'Java', icon: <JavaIcon /> },
  { name: 'Kotlin', icon: <KotlinIcon /> },
  { name: 'Spring Boot', icon: <SpringBootIcon /> },
  { name: 'Firebase', icon: <FirebaseIcon /> },
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextjsIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
  { name: 'HTML', icon: <HtmlIcon /> },
  { name: 'CSS', icon: <CssIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'MySQL', icon: <MySqlIcon /> },
  { name: 'MongoDB', icon: <MongoDbIcon /> },
  { name: 'WordPress', icon: <WordPressIcon /> },
  { name: 'Excel', icon: <ExcelIcon /> },
  { name: 'Odoo', icon: <OdooIcon /> },
  { name: 'Snipe-IT', icon: <SnipeItIcon /> },
  { name: 'Pipedrive', icon: <PipedriveIcon /> },
];

const SkillCard: React.FC<{ name: string; icon: React.ReactElement; delay: number }> = ({ name, icon, delay }) => {
  return (
    <motion.div
      className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/40 p-4 rounded-lg flex flex-col items-center justify-center gap-3 text-gray-400 transition-all duration-300 hover:bg-indigo-600/20 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: delay * 0.05 }}
    >
      {React.cloneElement(icon, { className: 'w-10 h-10' })}
      <span className="font-medium text-center text-sm">{name}</span>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { translations } = useTranslations();

  return (
    <section id="skills" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-white">{translations.skills.title}</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
      </motion.div>
      <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;