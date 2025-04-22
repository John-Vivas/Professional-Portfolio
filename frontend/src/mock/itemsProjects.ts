import { Project } from "../types";

// Mock data for development
export const mockProjects: Project[] = [
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