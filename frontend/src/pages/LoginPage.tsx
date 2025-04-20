import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/shared/PageWrapper';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Section from '../components/shared/Section';
import LoginForm from '../components/auth/LoginForm';
import { useAuth } from '../hooks/useAuth';

const LoginPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to admin if already authenticated
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <Section fullHeight>
          <LoginForm />
        </Section>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default LoginPage;