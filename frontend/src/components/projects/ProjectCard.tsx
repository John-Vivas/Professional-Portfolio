import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-primary/30 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-70" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold">{project.title}</h3>
          
          {/* Links */}
          <div className="flex space-x-4 mt-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary/50 rounded-full hover:bg-accent/80 transition-colors duration-300"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={20} />
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary/50 rounded-full hover:bg-accent/80 transition-colors duration-300"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-text-secondary mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;