import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';
import Button from '../shared/Button';
import { useAuth } from '../../hooks/useAuth';
import { fadeIn } from '../../utils/animations';

// Form validation schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const { login, error } = useAuth();
  const navigate = useNavigate();
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    
    try {
      const success = await login(data);
      if (success) {
        navigate('/admin');
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className="w-full max-w-md mx-auto p-8 bg-primary/20 rounded-lg shadow-lg"
    >
      <motion.div variants={fadeIn('down', 0.1)} className="text-center mb-8">
        <div className="mx-auto w-16 h-16 bg-primary/50 rounded-full flex items-center justify-center mb-4">
          <Lock size={24} className="text-accent" />
        </div>
        <h2 className="text-2xl font-bold">Admin Login</h2>
        <p className="text-text-secondary mt-2">Sign in to access the admin dashboard</p>
      </motion.div>
      
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-error/20 border border-error/30 rounded-md text-error"
        >
          {error}
        </motion.div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <motion.div variants={fadeIn('up', 0.2)} className="mb-4">
          <label htmlFor="email" className="block text-text-primary mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.email ? 'border-error' : 'border-gray-700'
            }`}
            placeholder="admin@example.com"
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-error text-sm">{errors.email.message}</p>
          )}
        </motion.div>
        
        <motion.div variants={fadeIn('up', 0.3)} className="mb-6">
          <label htmlFor="password" className="block text-text-primary mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={`w-full px-4 py-2 bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
              errors.password ? 'border-error' : 'border-gray-700'
            }`}
            placeholder="********"
            {...register('password')}
          />
          {errors.password && (
            <p className="mt-1 text-error text-sm">{errors.password.message}</p>
          )}
        </motion.div>
        
        <motion.div variants={fadeIn('up', 0.4)}>
          <Button 
            type="submit" 
            variant="primary" 
            size="lg" 
            isLoading={isSubmitting}
            fullWidth
          >
            Sign In
          </Button>
        </motion.div>
        
        <motion.p 
          variants={fadeIn('up', 0.5)}
          className="mt-4 text-center text-text-secondary text-sm"
        >
          <span className="block md:inline">Demo credentials: </span>
          <span className="font-mono">demo@example.com / password</span>
        </motion.p>
      </form>
    </motion.div>
  );
};

export default LoginForm;