import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import PageWrapper from '../components/shared/PageWrapper';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Button from '../components/shared/Button';

const NotFoundPage: React.FC = () => {
  return (
    <PageWrapper>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-8xl md:text-9xl font-bold text-accent">404</h1>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold mt-4"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-text-secondary mt-4"
          >
            The page you are looking for might have been removed, had its name 
            changed, or is temporarily unavailable.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8"
          >
            <Button as={Link} to="/" variant="primary" size="lg">
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default NotFoundPage;