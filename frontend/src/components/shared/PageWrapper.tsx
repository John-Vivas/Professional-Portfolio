import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../../utils/animations';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-20" // Add padding for the fixed navbar
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;