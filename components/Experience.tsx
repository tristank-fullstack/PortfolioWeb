import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { motion } from 'framer-motion';
import BriefcaseIcon from './icons/BriefcaseIcon';
import GraduationCapIcon from './icons/GraduationCapIcon';

const TimelineItem: React.FC<{ item: any; icon: React.ReactNode; isLast: boolean }> = ({ item, icon, isLast }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-6">
      <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
        {icon}
      </div>
      {!isLast && <div className="w-px h-full bg-gray-700"></div>}
    </div>
    <div className={`pb-10 ${!isLast ? 'border-b border-gray-800' : ''} w-full`}>
      <p className="text-sm text-gray-400 mb-1">{item.duration}</p>
      <h3 className="text-xl font-bold text-white mb-1">{item.role || item.degree}</h3>
      <p className="text-md text-indigo-400 font-medium mb-3">{item.company || item.institution}</p>
      <p className="text-gray-300">{item.description}</p>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const { translations } = useTranslations();
  const workExperience = translations.experience.work;
  const education = translations.experience.education;

  return (
    <section id="experience" className="py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-white">{translations.experience.title}</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-16"></div>
      </motion.div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">{translations.experience.workTitle}</h3>
          <div>
            {workExperience.map((item: any, index: number) => (
              <TimelineItem 
                key={index} 
                item={item} 
                icon={<BriefcaseIcon className="w-6 h-6" />}
                isLast={index === workExperience.length - 1} 
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">{translations.experience.educationTitle}</h3>
          <div>
            {education.map((item: any, index: number) => (
              <TimelineItem 
                key={index} 
                item={item} 
                icon={<GraduationCapIcon className="w-6 h-6" />}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
