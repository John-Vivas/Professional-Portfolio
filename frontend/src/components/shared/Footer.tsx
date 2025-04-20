import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-accent">Dev</span>Portfolio
            </Link>
            <p className="text-text-secondary mb-6 max-w-md">
              A passionate fullstack developer creating innovative web applications 
              with modern technologies and best practices.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-text-secondary hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-accent transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-text-secondary hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-accent transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="text-text-secondary hover:text-accent transition-colors">Admin</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-text-primary font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-text-secondary space-y-2">
              <p>New York, NY</p>
              <p>
                <a href="mailto:contact@example.com" className="hover:text-accent transition-colors">
                  contact@example.com
                </a>
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-accent transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} DevPortfolio. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="mx-1 text-error" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;