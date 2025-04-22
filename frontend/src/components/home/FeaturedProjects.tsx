import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Section from '../shared/Section';
import Button from '../shared/Button';
import { useProjects } from '../../hooks/useProjects';
import { fadeIn, staggerContainer } from '../../utils/animations';

const FeaturedProjects: React.FC = () => {
  const { projects, isLoading, error } = useProjects(true);

  if (error) {
    return (
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="A selection of my recent work"
      >
        <div className="text-center text-error p-8">
          <p>{error}</p>
        </div>
      </Section>
    );
  }

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A selection of my recent work"
      className="bg-primary/30"
    >
      {isLoading ? (
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn('up', 0.1)}
                className="bg-primary/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-text-secondary mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button variant="primary" onClick={() => window.scrollTo(0, 0)}>
              <Link to="/projects" className='inline-flex items-center'>
                View All Projects <ArrowRight className="ml-2" size={18} />
              </Link>

            </Button>
          </div>
        </>
      )}
    </Section>
  );
};

export default FeaturedProjects;