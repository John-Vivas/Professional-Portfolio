import React, { useState } from 'react';
import { Edit, Trash2, Star, StarOff } from 'lucide-react';
import { Project } from '../../types';
import { projectsApi } from '../../utils/api';


interface ProjectsListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onRefresh: () => void;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects, onEdit, onRefresh }) => {
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    if (confirmDelete !== id) {
      setConfirmDelete(id);
      return;
    }

    setDeletingId(id);

    try {
      await projectsApi.delete(id);
      onRefresh();
    } catch (error) {
      console.error('Error deleting project:', error);
    } finally {
      setDeletingId(null);
      setConfirmDelete(null);
    }
  };

  const handleToggleFeatured = async (project: Project) => {
    try {
      await projectsApi.update(project.id, {
        featured: !project.featured
      });
      onRefresh();
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-primary">
          <tr>
            <th className="text-left px-4 py-3">Featured</th>
            <th className="text-left px-4 py-3">Title</th>
            <th className="text-left px-4 py-3 hidden md:table-cell">Technologies</th>
            <th className="text-left px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan={4} className="px-4 py-8 text-center text-text-secondary">
                No projects found. Add your first project.
              </td>
            </tr>
          ) : (
            projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-gray-700 hover:bg-primary/20 transition-colors"
              >
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleToggleFeatured(project)}
                    className={`p-1.5 rounded-full transition-colors ${project.featured ? 'text-accent hover:bg-accent/20' : 'text-gray-500 hover:bg-gray-700'
                      }`}
                    aria-label={project.featured ? 'Remove from featured' : 'Add to featured'}
                  >
                    {project.featured ? <Star size={18} /> : <StarOff size={18} />}
                  </button>
                </td>
                <td className="px-4 py-3 font-medium">{project.title}</td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-1.5 py-0.5 rounded-full bg-accent/20 text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-accent/10 text-accent">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(project)}
                      className="p-1.5 rounded-full text-text-secondary hover:bg-primary-light/30 hover:text-text-primary transition-colors"
                      aria-label={`Edit ${project.title}`}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className={`p-1.5 rounded-full transition-colors ${confirmDelete === project.id
                        ? 'bg-error/20 text-error'
                        : 'text-text-secondary hover:bg-error/20 hover:text-error'
                        }`}
                      disabled={deletingId === project.id}
                      aria-label={`Delete ${project.title}`}
                    >
                      {deletingId === project.id ? (
                        <div className="w-[18px] h-[18px] border-2 border-error border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Trash2 size={18} />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsList;