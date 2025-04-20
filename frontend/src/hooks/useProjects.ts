import { useState, useEffect } from 'react';
import { Project } from '../types';
import { projectsApi } from '../utils/api';

export const useProjects = (featuredOnly: boolean = false) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        let data: Project[];
        if (featuredOnly) {
          data = await projectsApi.getFeatured();
        } else {
          data = await projectsApi.getAll();
        }
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch projects. Please try again later.');
        console.error('Error in useProjects hook:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [featuredOnly]);

  return { projects, isLoading, error };
};

export const useProject = (id: number | null) => {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id === null) {
      setProject(null);
      setIsLoading(false);
      return;
    }
    
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const data = await projectsApi.getById(id);
        setProject(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch project details. Please try again later.');
        console.error(`Error fetching project ${id}:`, err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return { project, isLoading, error };
};