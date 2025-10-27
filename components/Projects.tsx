import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { motion } from 'framer-motion';
import GitHubIcon from './icons/GitHubIcon';

const ProjectCard: React.FC<{ project: any; delay: number }> = ({ project, delay }) => {
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.name}`} className="text-gray-400 hover:text-indigo-400 transition-colors">
            <GitHubIcon className="w-7 h-7" />
          </a>
        </div>
        <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t: string) => (
            <span key={t} className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const { translations } = useTranslations();
  const projects = [
    translations.projects.hearMeApp,
    translations.projects.hearMeApi,
    translations.projects.portfolio,
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">{translations.projects.title}</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} delay={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;