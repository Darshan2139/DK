import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { resumeData } from '@/data/resume';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = resumeData.ui.hero.rotatingTexts;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const handleDownloadCV = () => {
    window.open(resumeData.personal.resumeUrl, '_blank');
  };

  const handleContact = () => {
    window.location.href = `mailto:${resumeData.personal.email}`;
  };

  return (
    <section className="min-h-[88vh] sm:min-h-screen flex items-center justify-center relative overflow-visible pt-24 sm:pt-28">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 3 + 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 sm:mb-8 p-1.5 sm:p-2 md:p-2.5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse-slow"></div>
            <img
              src={resumeData.personal.profileImage}
              alt={resumeData.personal.name}
              className="relative z-10 w-full h-full rounded-full object-cover object-center mx-auto border-2 border-white/15"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 animate-glow"></div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan animate-slideUp leading-[1.15] tracking-tight pb-1">
            {resumeData.personal.name}
          </h1>

          {/* Typing Animation */}
          <div className="h-16 sm:h-20 flex items-center justify-center px-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-neon-blue font-mono text-center">
              {currentText}
              <span className="animate-blink text-neon-cyan">|</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fadeIn px-4">
            {resumeData.personal.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-4">
            <Button
              onClick={handleDownloadCV}
              className="group relative overflow-hidden bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/50 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <Button
              onClick={handleContact}
              variant="outline"
              className="group relative overflow-hidden border-2 border-neon-cyan text-neon-cyan font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-neon-cyan/10 hover:shadow-xl hover:shadow-neon-cyan/30 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Me
              </span>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
            <a
              href={resumeData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full glass hover:glass-dark transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-blue/30 group"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href={resumeData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full glass hover:glass-dark transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-cyan/30 group"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-neon-cyan group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="p-2 sm:p-3 rounded-full glass hover:glass-dark transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-purple/30 group"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-neon-purple group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-neon-blue to-transparent rounded-full"></div>
      </div>
    </section>
  );
}
