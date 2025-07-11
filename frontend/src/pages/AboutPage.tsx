import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/shared/PageWrapper";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Section from "../components/shared/Section";
import TechStack from "../components/about/TechStack";
import Education from "../components/about/Education";
import Experience from "../components/about/Experience";
import { fadeIn } from "../utils/animations";
// import profilePhoto from "../../public/img/photo_profetional.jpg";

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <Section
          id="about"
          title="About Me"
          subtitle="Get to know more about my background and skills"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Bio and Image */}
            <motion.div
              className="lg:col-span-1"
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative mb-6">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/img/photo_profetional.jpg"
                    alt="John E Vivas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-lg -z-10"></div>
              </div>

              <div className="bg-primary/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Personal Info</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <span className="font-semibold w-24">Name:</span>
                    <span className="text-text-secondary">John E Vivas</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-24">Age:</span>
                    <span className="text-text-secondary">27</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-24">Location:</span>
                    <span className="text-text-secondary">Cali, Colombia</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-24">Email:</span>
                    <a
                      href="mailto:j.vivas0122@gmail.com"
                      className="text-accent hover:underline"
                    >
                      j.vivas0122@gmail.com
                    </a>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-24">Freelance:</span>
                    <span className="text-success">Available</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Bio, Experience, and Education */}
            <motion.div
              className="lg:col-span-2"
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Biography</h3>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Hi there! I'm John, a self-taught fullstack developer with a
                    strong passion for building modern and intelligent web
                    applications. While I don't have formal work experience yet,
                    I've participated in multiple hackathons in Colombia and
                    recently joined a virtual AI agents hackathon focused on
                    cutting-edge technologies.
                  </p>
                  <p>
                    I specialize in learning by doing — constantly exploring
                    frameworks and tools like React, Node.js, Django, and
                    Flutter to build real-world solutions. I'm currently diving
                    deep into AI agents using Semantic Kernel, LangChain, and
                    Azure AI.
                  </p>
                  <p>
                    I'm driven by curiosity and a love for technology. Whether
                    it's prototyping an AI-powered app or collaborating on a
                    team challenge, I'm always eager to grow and contribute.
                  </p>
                  <p>
                    When I'm not coding, I enjoy researching new tech trends,
                    studying engineering principles, and connecting with the
                    developer community.
                  </p>
                </div>
              </div>

              <TechStack />
            </motion.div>
          </div>
        </Section>

        <Section className="bg-primary/30">
          <Experience />
        </Section>

        <Section>
          <Education />
        </Section>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default AboutPage;
