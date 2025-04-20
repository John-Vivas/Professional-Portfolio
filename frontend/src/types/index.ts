// Project Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  repoUrl: string;
  technologies: string[];
  featured: boolean;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Auth Types
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}