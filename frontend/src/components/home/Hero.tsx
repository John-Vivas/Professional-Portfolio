import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '../shared/Button';
import { textVariant, fadeIn } from '../../utils/animations';
import profilePhoto from '../../../public/assets//img/photo_profetional.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-background to-background opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
      />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
          >
            <motion.div variants={textVariant(0.1)}>
              <span className="text-accent font-mono text-lg">Hello, I'm</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2"
              variants={textVariant(0.2)}
            >
              John E Vivas
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-text-secondary mt-2"
              variants={textVariant(0.3)}
            >
              Fullstack Developer
            </motion.h2>

            <motion.p
              className="text-text-secondary mt-6 max-w-lg text-lg"
              variants={textVariant(0.4)}
            >
              I craft modern, responsive web applications using cutting-edge technologies. With a strong focus on both frontend and backend development, I build seamless, high-performance digital experiences that deliver real value.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={textVariant(0.5)}
            >
              <Button variant="primary" size="lg">
                <Link to="/contact" className="inline-flex items-center">
                  Hire Me <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>

              <Button variant="outline" size="lg">
                <a href="/docs/John_E_Vivas.pdf" className="inline-flex items-center" download>

                  Download CV <Download className="ml-2" size={20} />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src={profilePhoto}
                  alt="John Photo profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-lg bg-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-lg bg-primary-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;