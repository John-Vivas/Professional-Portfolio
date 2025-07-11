import axios from 'axios';
import { Project, ContactFormData, LoginCredentials, User } from '../types';
import imgProfessionalPortfolio from '../../public/img/AdvanceAndTechnology.png'
import reserveRooms from '../../public/img/reserveRooms.png'
import advanceAndTech from '../../public/img/AdvanceAndTechnology.png'
import brandBooster from '../../public/img/brandBooster.png'
import badgeSpring from '../../public/img/badgeSpring.png'
import hackathon from '../../public/img/hackathon.png'
import badgeLiteratura from '../../public/img/badgeliteralura.png'
import badgeConversor from '../../public/img/badgeConversor.png'
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
export const mockProjects: Project[] = [
  {
    id: 3,
    title: 'Brand Booster',
    description: 'COMING SOON! A powerful eCommerce platform designed to boost small, medium, and large businesses. Features include product management, order processing, and customer engagement tools.',
    image: brandBooster,
    demoUrl: '#',
    repoUrl: 'https://github.com/John-Vivas/Brand-Booster',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'MercadoPago', 'JWT'],
    featured: true
  },
  {
    id: 2,
    title: 'COMING SOON! AVANCE AND TECHNOLOGY S.A.S',
    description: 'A modern and responsive company page showcasing the services and projects of Software A&T. Features include a portfolio section, testimonials, and a contact form.',
    image: advanceAndTech,
    demoUrl: '#',
    repoUrl: 'https://github.com/Advance-and-Technology/Page-Web',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'React Query'],
    featured: true
  },
  {
    id: 1,
    title: 'COMING SOON! Hackathon Project - Agents AI Reactor Microsoft',
    description: 'A hackathon project that leverages AI to develop a web application for managing natural medicine prescriptions.',
    image: hackathon,
    demoUrl: '#',
    repoUrl: '#',
    technologies: ['', '', '', '', ''],
    featured: true
  },
  {
    id: 4,
    title: 'Hackathon Project - ReserverRooms',
    description: 'A project by admin rooms that focuses on creating a web application for managing and monitoring admin activities. Features include user management, activity logs, and real-time notifications.',
    image: reserveRooms,
    demoUrl: 'https://front-hackathon-henna.vercel.app/',
    repoUrl: 'https://github.com/John-Vivas/Hackathon',
    technologies: ['React', 'javaScript', 'node.js', 'mongoDB', 'express'],
    featured: false
  },
  {
    id: 5,
    title: 'Professional portfolio website',
    description: 'A personal portfolio website showcasing my projects, skills, and experience. Features include a blog section, contact form, and responsive design.',
    image: imgProfessionalPortfolio,
    demoUrl: 'https://example.com/demo5',
    repoUrl: 'https://github.com/John-Vivas/Professional-Portfolio',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    featured: false
  },
  {
    id: 6,
    title: 'Forohub-backend',
    description: 'A project with spring boot Lombok, spring security, and JWT. It is a backend application that provides RESTful APIs for managing user authentication and authorization.',
    image: badgeSpring,
    demoUrl: '#',
    repoUrl: 'https://github.com/yourusername/real-estate',
    technologies: ['Spring Boot', 'DevTools', 'MySQL', 'FlyWay', 'Spring Security'],
    featured: false
  },
  {
    id: 7,
    title: 'Literatura Backend',
    description: 'This app lets users manage books and authors: search books by title via an external API, view local book and author lists, find authors alive in a given year, and filter books by language.',
    image: badgeLiteratura,
    demoUrl: '#',
    repoUrl: 'https://github.com/John-Vivas/Literatura-BackenProyect2',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'Git'],
    featured: false
  },
  {
    id: 8,
    title: 'Conversor de Monedas',
    description: 'A simple Java application that converts between different currencies using real-time exchange rates from an external API.',
    image: badgeConversor,
    demoUrl: '#',
    repoUrl: 'https://github.com/John-Vivas/Conversor-de-Monedas-BackendProject1',
    technologies: ['java'],
    featured: false
  },
  {
    id: 9,
    title: 'e-Commerce pesonal',
    description: 'A simple eCommerce website built with HTML and CSS, featuring a clean layout for displaying products, prices, and basic shopping interface elements.',
    image: badgeSpring,
    demoUrl: 'https://john-vivas.github.io/page/',
    repoUrl: 'https://github.com/John-Vivas/page',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    featured: false
  }
];
