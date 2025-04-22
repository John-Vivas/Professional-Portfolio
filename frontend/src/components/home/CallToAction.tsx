import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Clock } from 'lucide-react';
import Button from '../shared/Button';
import { fadeIn } from '../../utils/animations';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.12, 0.1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeIn('up', 0.1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Have a project in mind?
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.2)}
            className="text-text-secondary max-w-2xl mb-8 text-lg"
          >
            I'm currently available for freelance work. Let's build something amazing together.
          </motion.p>

          <motion.div
            variants={fadeIn('up', 0.3)}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-accent">
              <Mail size={20} />
              <span>j.vivas0122@gmail.com</span>
            </div>

            <div className="hidden md:block w-px h-6 bg-text-secondary/30 mx-2"></div>

            <div className="flex items-center gap-2 text-accent">
              <Clock size={20} />
              <span>Response time: within 24 hours</span>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.4)}>
            <Button variant="primary" size="lg">
              <Link to="/contact" className="inline-flex items-center" onClick={() => window.scrollTo(0, 0)}>

                Let's Talk <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;