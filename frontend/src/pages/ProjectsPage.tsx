import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/shared/PageWrapper';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Section from '../components/shared/Section';
import ProjectCard from '../components/projects/ProjectCard';
import { useProjects } from '../hooks/useProjects';
import { fadeIn } from '../utils/animations';

const ProjectsPage: React.FC = () => {
  const { projects, isLoading, error } = useProjects();
  const [filter, setFilter] = useState<string | null>(null);
  
  // Extract unique technologies from all projects
  const allTechnologies = projects.reduce<string[]>((acc, project) => {
    project.technologies.forEach(tech => {
      if (!acc.includes(tech)) {
        acc.push(tech);
      }
    });
    return acc;
  }, []).sort();
  
  // Filter projects based on selected technology
  const filteredProjects = filter
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;
  
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <Section 
          id="projects" 
          title="My Projects"
          subtitle="A showcase of my development work"
        >
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center text-error p-8">
              <p>{error}</p>
            </div>
          ) : (
            <>
              {/* Filter by technology */}
              <motion.div
                variants={fadeIn('down', 0.1)}
                initial="hidden"
                animate="visible"
                className="mb-12 flex flex-wrap justify-center gap-2"
              >
                <button
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    filter === null
                      ? 'bg-accent text-white'
                      : 'bg-primary/20 hover:bg-primary/40 text-text-secondary'
                  }`}
                  onClick={() => setFilter(null)}
                >
                  All
                </button>
                
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                      filter === tech
                        ? 'bg-accent text-white'
                        : 'bg-primary/20 hover:bg-primary/40 text-text-secondary'
                    }`}
                    onClick={() => setFilter(tech === filter ? null : tech)}
                  >
                    {tech}
                  </button>
                ))}
              </motion.div>
              
              {filteredProjects.length === 0 ? (
                <motion.div
                  variants={fadeIn('up', 0.2)}
                  initial="hidden"
                  animate="visible"
                  className="text-center py-12"
                >
                  <p className="text-text-secondary">No projects found with the selected filter.</p>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              )}
            </>
          )}
        </Section>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default ProjectsPage;