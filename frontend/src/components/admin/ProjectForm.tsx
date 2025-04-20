import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X } from 'lucide-react';
import Button from '../shared/Button';
import { Project } from '../../types';
import { projectsApi } from '../../utils/api';

// Form validation schema
const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z.string().url("Must be a valid URL"),
  demoUrl: z.string().url("Must be a valid URL"),
  repoUrl: z.string().url("Must be a valid URL"),
  technologies: z.string().min(3, "Enter at least one technology"),
  featured: z.boolean()
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  project?: Project;
  onSuccess: () => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onSuccess, onCancel }) => {
  const isEditing = !!project;
  
  const defaultValues: Partial<ProjectFormData> = {
    title: project?.title || '',
    description: project?.description || '',
    image: project?.image || '',
    demoUrl: project?.demoUrl || '',
    repoUrl: project?.repoUrl || '',
    technologies: project?.technologies?.join(', ') || '',
    featured: project?.featured || false
  };
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues
  });
  
  const onSubmit = async (data: ProjectFormData) => {
    try {
      // Convert comma-separated technologies to array
      const formattedData = {
        ...data,
        technologies: data.technologies.split(',').map(tech => tech.trim())
      };
      
      if (isEditing && project) {
        await projectsApi.update(project.id, formattedData);
      } else {
        await projectsApi.create(formattedData as Omit<Project, 'id'>);
      }
      
      onSuccess();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };
  
  return (
    <div className="bg-primary/20 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">
          {isEditing ? 'Edit Project' : 'Add New Project'}
        </h3>
        <button 
          onClick={onCancel}
          className="p-2 rounded-full hover:bg-primary/50 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-text-primary mb-2">
              Project Title
            </label>
            <input
              id="title"
              type="text"
              className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.title ? 'border-error' : 'border-gray-700'
              }`}
              {...register('title')}
            />
            {errors.title && (
              <p className="mt-1 text-error text-sm">{errors.title.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="description" className="block text-text-primary mb-2">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.description ? 'border-error' : 'border-gray-700'
              }`}
              {...register('description')}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-error text-sm">{errors.description.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="image" className="block text-text-primary mb-2">
              Image URL
            </label>
            <input
              id="image"
              type="text"
              className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.image ? 'border-error' : 'border-gray-700'
              }`}
              {...register('image')}
            />
            {errors.image && (
              <p className="mt-1 text-error text-sm">{errors.image.message}</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="demoUrl" className="block text-text-primary mb-2">
                Demo URL
              </label>
              <input
                id="demoUrl"
                type="text"
                className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.demoUrl ? 'border-error' : 'border-gray-700'
                }`}
                {...register('demoUrl')}
              />
              {errors.demoUrl && (
                <p className="mt-1 text-error text-sm">{errors.demoUrl.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="repoUrl" className="block text-text-primary mb-2">
                Repository URL
              </label>
              <input
                id="repoUrl"
                type="text"
                className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                  errors.repoUrl ? 'border-error' : 'border-gray-700'
                }`}
                {...register('repoUrl')}
              />
              {errors.repoUrl && (
                <p className="mt-1 text-error text-sm">{errors.repoUrl.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="technologies" className="block text-text-primary mb-2">
              Technologies (comma separated)
            </label>
            <input
              id="technologies"
              type="text"
              className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
                errors.technologies ? 'border-error' : 'border-gray-700'
              }`}
              placeholder="React, Node.js, MongoDB"
              {...register('technologies')}
            />
            {errors.technologies && (
              <p className="mt-1 text-error text-sm">{errors.technologies.message}</p>
            )}
          </div>
          
          <div className="flex items-center">
            <input
              id="featured"
              type="checkbox"
              className="w-4 h-4 bg-background border-gray-700 rounded"
              {...register('featured')}
            />
            <label htmlFor="featured" className="ml-2 text-text-primary">
              Featured Project
            </label>
          </div>
          
          <div className="flex justify-end gap-4 mt-6">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="primary" 
              isLoading={isSubmitting}
            >
              {isEditing ? 'Update Project' : 'Add Project'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;