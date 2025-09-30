import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import BackToTop from '@/components/layout/BackToTop';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Technologies from '@/components/sections/Technologies';
import CoCurricular from '@/components/sections/CoCurricular';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

export default function Portfolio() {
  useEffect(() => {
    // Ensure smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add parallax effect to background
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-bg') as HTMLElement;
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg fixed inset-0 -z-10 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
        <div className="absolute inset-0">
          {/* Animated background particles */}
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Education Section */}
        <section id="education">
          <Education />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Technologies Section */}
        <section id="technologies">
          <Technologies />
        </section>

        {/* Co-Curricular Section */}
        <section id="co-curricular">
          <CoCurricular />
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <Certifications />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 glass-dark">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Darshan Kachhiya. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-2 mt-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-neon-blue rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}
