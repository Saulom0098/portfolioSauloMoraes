'use client';

import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
