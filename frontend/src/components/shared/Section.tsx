import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullHeight = false
}) => {
  return (
    <section
      id={id}
      className={`px-4 py-16 md:py-24 ${fullHeight ? 'min-h-screen' : ''} ${className}`}
    >
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <motion.h2
                variants={fadeIn('up', 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
              >
                {title}
                <motion.div
                  className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="text-lg text-text-secondary max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;