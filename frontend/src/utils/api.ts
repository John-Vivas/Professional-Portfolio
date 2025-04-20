import axios from 'axios';
import { Project, ContactFormData, LoginCredentials, User } from '../types';

// Base API URL - Replace with your actual API URL in production
const API_URL = 'https://api.example.com';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Projects API
export const projectsApi = {
  getAll: async (): Promise<Project[]> => {
    try {
      // In development, use this mock data
      // In production, uncomment the API call below
      return mockProjects;
      
      // const response = await api.get('/projects');
      // return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },
  
  getFeatured: async (): Promise<Project[]> => {
    try {
      // In development, filter mock data
      // In production, use a dedicated API endpoint
      return mockProjects.filter(project => project.featured);
      
      // const response = await api.get('/projects/featured');
      // return response.data;
    } catch (error) {
      console.error('Error fetching featured projects:', error);
      return [];
    }
  },
  
  getById: async (id: number): Promise<Project | null> => {
    try {
      // In development, find in mock data
      // In production, use API
      const project = mockProjects.find(p => p.id === id);
      return project || null;
      
      // const response = await api.get(`/projects/${id}`);
      // return response.data;
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error);
      return null;
    }
  },
  
  // Admin functions - only available when authenticated
  create: async (project: Omit<Project, 'id'>): Promise<Project | null> => {
    try {
      const response = await api.post('/projects', project);
      return response.data;
    } catch (error) {
      console.error('Error creating project:', error);
      return null;
    }
  },
  
  update: async (id: number, project: Partial<Project>): Promise<Project | null> => {
    try {
      const response = await api.put(`/projects/${id}`, project);
      return response.data;
    } catch (error) {
      console.error(`Error updating project ${id}:`, error);
      return null;
    }
  },
  
  delete: async (id: number): Promise<boolean> => {
    try {
      await api.delete(`/projects/${id}`);
      return true;
    } catch (error) {
      console.error(`Error deleting project ${id}:`, error);
      return false;
    }
  }
};

// Contact API
export const contactApi = {
  submitForm: async (formData: ContactFormData): Promise<boolean> => {
    try {
      // For demonstration purposes, we'll just log the form data
      console.log('Form data submitted:', formData);
      
      // In production, uncomment this:
      // await api.post('/contact', formData);
      
      return true;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return false;
    }
  }
};

// Auth API
export const authApi = {
  login: async (credentials: LoginCredentials): Promise<{ user: User; token: string } | null> => {
    try {
      // For demo purposes we'll simulate a login
      // In production, use a real API
      if (credentials.email === 'demo@example.com' && credentials.password === 'password') {
        const mockUser = {
          id: '1',
          email: 'demo@example.com',
          name: 'Demo User'
        };
        const token = 'mock-jwt-token';
        
        // Store token
        localStorage.setItem('auth_token', token);
        
        return { user: mockUser, token };
      }
      
      throw new Error('Invalid credentials');
      
      // const response = await api.post('/auth/login', credentials);
      // const { user, token } = response.data;
      // localStorage.setItem('auth_token', token);
      // return { user, token };
    } catch (error) {
      console.error('Login error:', error);
      return null;
    }
  },
  
  logout: async (): Promise<void> => {
    localStorage.removeItem('auth_token');
    // In production you might want to invalidate the token on the server
    // await api.post('/auth/logout');
  },
  
  getCurrentUser: async (): Promise<User | null> => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) return null;
      
      // For demo, return a mock user if token exists
      return {
        id: '1',
        email: 'demo@example.com',
        name: 'Demo User'
      };
      
      // const response = await api.get('/auth/me');
      // return response.data;
    } catch (error) {
      console.error('Error getting current user:', error);
      localStorage.removeItem('auth_token');
      return null;
    }
  }
};

// Mock data for development
const mockProjects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product catalog, shopping cart, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo1',
    repoUrl: 'https://github.com/yourusername/ecommerce-platform',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux', 'JWT'],
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates. Features include task creation, assignment, status tracking, and team collaboration tools.',
    image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo2',
    repoUrl: 'https://github.com/yourusername/task-manager',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'React Query'],
    featured: true
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media analytics dashboard that integrates with multiple platforms to provide insights and performance metrics.',
    image: 'https://images.pexels.com/photos/5693708/pexels-photo-5693708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo3',
    repoUrl: 'https://github.com/yourusername/social-dashboard',
    technologies: ['Vue.js', 'Express', 'D3.js', 'PostgreSQL', 'OAuth'],
    featured: true
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'A weather application that provides current conditions and forecasts for locations worldwide. Features include interactive maps, alerts, and historical data.',
    image: 'https://images.pexels.com/photos/3910073/pexels-photo-3910073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo4',
    repoUrl: 'https://github.com/yourusername/weather-app',
    technologies: ['React Native', 'OpenWeatherMap API', 'Geolocation', 'Charts.js'],
    featured: false
  },
  {
    id: 5,
    title: 'Recipe Sharing Platform',
    description: 'A community-driven recipe sharing platform where users can discover, save, and share their favorite recipes. Includes search, filtering, and user profiles.',
    image: 'https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo5',
    repoUrl: 'https://github.com/yourusername/recipe-app',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Cloudinary'],
    featured: false
  },
  {
    id: 6,
    title: 'Real Estate Listings',
    description: 'A real estate platform that allows users to browse, search, and inquire about property listings. Features include map integration, filtering, and agent contact.',
    image: 'https://images.pexels.com/photos/1560065/pexels-photo-1560065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://example.com/demo6',
    repoUrl: 'https://github.com/yourusername/real-estate',
    technologies: ['Angular', 'Django', 'PostgreSQL', 'Google Maps API', 'Docker'],
    featured: false
  }
];