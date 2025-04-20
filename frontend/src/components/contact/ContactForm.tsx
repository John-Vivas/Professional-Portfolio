import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { contactApi } from '../../utils/api';
import { fadeIn } from '../../utils/animations';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message cannot exceed 500 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const success = await contactApi.submitForm(data);
      
      if (success) {
        setSubmitSuccess(true);
        reset();
        // Reset success message after delay
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitError("There was a problem sending your message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-primary/20 rounded-lg p-6 md:p-8 shadow-lg"
    >
      <motion.h3 
        variants={fadeIn('up', 0.1)}
        className="text-2xl font-bold mb-6"
      >
        Send Me a Message
      </motion.h3>
      
      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-success/20 border border-success/30 rounded-md text-success flex items-center"
        >
          <span>Your message has been sent successfully!</span>
        </motion.div>
      )}
      
      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-error/20 border border-error/30 rounded-md text-error flex items-center"
        >
          <span>{submitError}</span>
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div variants={fadeIn('up', 0.2)} className="mb-4">
          <label htmlFor="name" className="block text-text-primary mb-2">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.name ? 'border-error' : 'border-gray-700'
            }`}
            placeholder="John Doe"
            {...register('name')}
          />
          {errors.name && (
            <p className="mt-1 text-error text-sm">{errors.name.message}</p>
          )}
        </motion.div>
        
        <motion.div variants={fadeIn('up', 0.3)} className="mb-4">
          <label htmlFor="email" className="block text-text-primary mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.email ? 'border-error' : 'border-gray-700'
            }`}
            placeholder="john@example.com"
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-error text-sm">{errors.email.message}</p>
          )}
        </motion.div>
        
        <motion.div variants={fadeIn('up', 0.4)} className="mb-4">
          <label htmlFor="subject" className="block text-text-primary mb-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.subject ? 'border-error' : 'border-gray-700'
            }`}
            placeholder="Project Inquiry"
            {...register('subject')}
          />
          {errors.subject && (
            <p className="mt-1 text-error text-sm">{errors.subject.message}</p>
          )}
        </motion.div>
        
        <motion.div variants={fadeIn('up', 0.5)} className="mb-6">
          <label htmlFor="message" className="block text-text-primary mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.message ? 'border-error' : 'border-gray-700'
            }`}
            placeholder="Tell me about your project..."
            {...register('message')}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-error text-sm">{errors.message.message}</p>
          )}
        </motion.div>
        
        <motion.div variants={fadeIn('up', 0.6)}>
          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            isLoading={isSubmitting}
            fullWidth
          >
            Send Message <Send className="ml-2" size={18} />
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;