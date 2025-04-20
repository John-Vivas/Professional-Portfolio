import React from 'react';
import PageWrapper from '../components/shared/PageWrapper';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Skills from '../components/home/Skills';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <FeaturedProjects />
        <CallToAction />
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default HomePage;