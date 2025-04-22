import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github as GitHub, Linkedin } from 'lucide-react';
import PageWrapper from '../components/shared/PageWrapper';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Section from '../components/shared/Section';
import ContactForm from '../components/contact/ContactForm';
import { fadeIn } from '../utils/animations';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-accent" size={24} />,
      title: 'Email',
      value: 'j.vivas0122@gmail.com',
      link: 'mailto:j.vivas0122@gmail.com'
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      title: 'Location',
      value: 'Cali, Valle, Colombia',
      link: 'https://maps.app.goo.gl/iygKLXg5iNHz1gFs7'
    },
    {
      icon: <Phone className="text-accent" size={24} />,
      title: 'Phone',
      value: '+57 (319) 663-5716',
      link: 'tel:+573196635716'
    }
  ];

  const socialLinks = [
    {
      icon: <GitHub size={20} />,
      title: 'GitHub',
      link: 'https://github.com/John-Vivas'
    },
    {
      icon: <Linkedin size={20} />,
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/john-e-vivas'
    },
    // {
    //   icon: <Twitter size={20} />,
    //   title: 'Twitter',
    //   link: 'https://twitter.com'
    // }
  ];

  return (
    <PageWrapper>
      <Navbar />
      <main>
        <Section
          id="contact"
          title="Contact Me"
          subtitle="Get in touch for collaboration or inquiries"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={fadeIn('right', 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-text-secondary mb-8">
                Whether you have a project in mind, a question about my work, or just want to say hello,
                I'd love to hear from you. Feel free to reach out through any of the channels below,
                or use the contact form to send me a message directly.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn('up', 0.1 + (index * 0.1))}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/30 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <a
                        href={item.link}
                        className="text-text-secondary hover:text-accent transition-colors"
                        target={item.title === 'Location' ? '_blank' : undefined}
                        rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary/30 hover:bg-accent/20 flex items-center justify-center text-text-secondary hover:text-accent transition-colors"
                    aria-label={item.title}
                    variants={fadeIn('up', 0.6 + (index * 0.1))}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeIn('left', 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default ContactPage;