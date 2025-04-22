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
      degree: 'Programming Technician',
      institution: 'Politecnico PIO',
      duration: '2024 - 2025',
      description: 'Specialized in Artificial Intelligence and Machine Learning with a focus on web technologies and distributed systems.'
    },
    {
      degree: 'Programming Bootcamp',
      institution: 'One Oracle Next Education',
      duration: '2023 - 2024',
      description: 'Intensive training in programming, covering Backend development in Spring Boot with java.'
    },
    {
      degree: 'Biomedical Engineering',
      institution: 'UAO',
      duration: '2018 - 2022',
      description: 'Studied Biomedical Engineering with a focus on medical devices and healthcare technology. Completed 7 semesters.'
    }
  ];

  const certifications: CertificationItem[] = [
    {
      title: 'SQL Training with Oracle MySQL Server - ONE',
      issuer: 'Alura Latam',
      date: 'Nov 2025',
      credential: 'https://app.aluracursos.com/degree/certificate/6ee3de23-a637-4218-9322-6388e99b4e34?lang'
    },
    {
      title: 'Java and Spring Boot G6 Training - ONE',
      issuer: 'Alura Latam',
      date: 'Jul 2025',
      credential: 'https://app.aluracursos.com/degree/certificate/6f4608b1-6e5d-42bc-a1bc-fb2eff670f23?lang'
    },
    {
      title: 'React Native Practical Course: List Management and API Consumption',
      issuer: 'Platzi',
      date: 'Jun 2023',
      credential: 'https://platzi.com/p/john0122vivas98/curso/2557-react-native-listas-apis/diploma/detalle/'
    },
    {
      title: 'Intermediate Python Course: Comprehensions, Lambdas, and Error Handling',
      issuer: 'Platzi',
      date: 'May 2023',
      credential: 'https://platzi.com/p/john0122vivas98/curso/2255-python-intermedio/diploma/detalle/'
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