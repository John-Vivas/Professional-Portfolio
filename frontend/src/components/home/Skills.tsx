import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Bot, Palette, Wrench } from 'lucide-react';
import Section from '../shared/Section';
import { fadeIn } from '../../utils/animations';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Building responsive, fast, and accessible web applications.',
      technologies: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS']
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Creating robust, secure, and scalable server-side applications.',
      technologies: ['Node.js', 'Express', 'Django', 'REST APIs', 'Spring Boot']
    },
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'Designing efficient database schemas and queries.',
      technologies: ['PostgreSQL', 'MongoDB', 'Mysql', 'Firebase']
    },

    {
      icon: <Palette size={24} />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications.',
      technologies: ['React Native', 'Expo', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: <Wrench size={24} />,
      title: 'DevOps & Deployment',
      description: 'Setting up CI/CD pipelines and managing cloud infrastructure.',
      technologies: ['GitHub Actions', 'Vercel']
    }, {
      icon: <Bot size={24} />,
      title: "AI Agent Development",
      description: "Creating intelligent AI agents for automation, data processing, and interactive applications across platforms.",
      technologies: [
        "Azure AI Agent Service",
        "Python",
        "Semantic Kernel",
        "LangChain",
        "OpenAI",
        "Azure Functions",
        "GitHub Models",
        "Azure Cosmos DB",
      ]
    }

  ];

  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="Technologies and tools I work with"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', index * 0.1)}
            className="p-6 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-4">
              {skill.icon}
            </div>

            <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
            <p className="text-text-secondary mb-4">{skill.description}</p>

            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs px-2 py-1 rounded-full bg-primary/30 text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;