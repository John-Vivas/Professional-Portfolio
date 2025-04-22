import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

interface TechCategory {
  title: string;
  technologies: string[];
}

const TechStack: React.FC = () => {
  const techCategories: TechCategory[] = [
    {
      title: 'Frontend',
      technologies: [
        'React', 'TypeScript', 'TailwindCSS', 'JavaScript',
        'Material UI', 'Framer Motion', 'HTML5', 'CSS3'
      ]
    },
    {
      title: 'Backend',
      technologies: [
        'Node.js', 'Express', 'Django', 'Spring Boot',
        'REST API', 'WebSockets', 'JWT', 'OAuth'
      ]
    },
    {
      title: 'Database',
      technologies: [
        'PostgreSQL', 'MongoDB', 'MySQL',
        'Firebase'
      ]
    },
    {
      title: 'DevOps & Cloud',
      technologies: [
        'GitHub Actions',
        'Vercel',
      ]
    },
    {
      title: 'Tools & Others',
      technologies: [
        'Git', 'VS Code', 'IntelliJ', 'Webpack',
        'Vite', 'Postman', 'npm/yarn'
      ]
    }
  ];

  return (
    <div className="mb-12">
      <motion.h3
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-2xl font-bold mb-6"
      >
        My Tech Stack
      </motion.h3>

      <div className="space-y-8">
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={fadeIn('up', 0.1 + (categoryIndex * 0.1))}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-3 text-accent">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-primary/40 text-text-primary border border-primary-light/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * techIndex, duration: 0.2 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;