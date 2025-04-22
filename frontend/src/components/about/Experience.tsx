import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experienceItems: ExperienceItem[] = [
    {
      title: 'Fullstack Developer',
      company: 'Advance and Technology',
      duration: 'Jan 2024 - Present',
      description: 'Leading development of enterprise platform for project management and team collaboration.',
      responsibilities: [
        'Architected and developed microservices backend with Node.js, Express, and PostgreSQL',
        'Built responsive and interactive frontend using React, TypeScript, and Redux',
        'Implemented CI/CD pipeline with GitHub Actions and Docker',
        'Mentored junior developers and conducted code reviews'
      ]
    }

  ];

  return (
    <div>
      <motion.h3
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl font-bold mb-6 flex items-center"
      >
        <Briefcase className="mr-2 text-accent" size={24} />
        Work Experience
      </motion.h3>

      <div className="space-y-12 relative">
        {/* Timeline line */}
        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-accent/30" />

        {experienceItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.1 + (index * 0.1))}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 bg-accent w-3.5 h-3.5 rounded-full border-4 border-primary z-10" />

            {/* Content */}
            <div className="bg-primary/20 rounded-lg p-6">
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-y-0 text-text-secondary mt-1">
                <span className="font-medium">{item.company}</span>
                <span className="hidden sm:block mx-2">•</span>
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {item.duration}
                </span>
              </div>

              <p className="mt-3 text-text-secondary">{item.description}</p>

              <ul className="mt-4 space-y-2">
                {item.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;