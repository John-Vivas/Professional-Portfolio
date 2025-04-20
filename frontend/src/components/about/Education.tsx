import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bookmark, Award } from 'lucide-react';
import { fadeIn } from '../../utils/animations';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      degree: 'Master of Computer Science',
      institution: 'Stanford University',
      duration: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning with a focus on web technologies and distributed systems.'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'MIT',
      duration: '2014 - 2018',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and full-stack development.'
    }
  ];
  
  const certifications: CertificationItem[] = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Jan 2022',
      credential: 'https://example.com/aws-cert'
    },
    {
      title: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: 'Mar 2021',
      credential: 'https://example.com/gcp-cert'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'Sep 2021',
      credential: 'https://example.com/k8s-cert'
    },
    {
      title: 'React and Redux Professional Certification',
      issuer: 'Meta',
      date: 'May 2022',
      credential: 'https://example.com/react-cert'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Education */}
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Bookmark className="mr-2 text-accent" size={24} />
          Education
        </h3>
        
        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.1 + (index * 0.1))}
              className="bg-primary/20 rounded-lg p-6 border-l-4 border-accent"
            >
              <h4 className="text-xl font-semibold">{item.degree}</h4>
              <div className="flex items-center text-text-secondary mt-2">
                <span>{item.institution}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {item.duration}
                </span>
              </div>
              <p className="mt-3 text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Certifications */}
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Award className="mr-2 text-accent" size={24} />
          Certifications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.1 + (index * 0.1))}
              className="bg-primary/20 rounded-lg p-4 hover:bg-primary/30 transition-colors duration-300"
            >
              <h4 className="font-semibold">{cert.title}</h4>
              <div className="flex justify-between text-text-secondary mt-1 text-sm">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
              {cert.credential && (
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm hover:underline mt-1 inline-block"
                >
                  View Credential
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;