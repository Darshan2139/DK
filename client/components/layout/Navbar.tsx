import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/data/resume';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Activities', href: '#co-curricular' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Lock body scroll when menu is open
    document.body.classList.toggle('overflow-hidden', isOpen);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    // Close menu first
    setIsOpen(false);
    
    // Small delay to ensure menu closes smoothly before scrolling
    setTimeout(() => {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  const handleDownloadCV = () => {
    window.open(resumeData.personal.resumeUrl, '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-dark backdrop-blur-lg shadow-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-105 transition-transform duration-300"
            >
              DK
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.href.substring(1)
                    ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-3 rounded-xl transition-all duration-300 group ${
                isScrolled 
                  ? 'glass-dark hover:glass-dark-enhanced border border-white/10 shadow-lg' 
                  : 'glass hover:glass-dark'
              } ${
                isOpen ? 'ring-2 ring-neon-blue/30 shadow-lg shadow-neon-blue/20' : ''
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                {/* Hamburger lines */}
                <span className={`absolute top-1 left-0 w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                } ${
                  isScrolled ? 'bg-white' : 'bg-white'
                }`}></span>
                <span className={`absolute top-3 left-0 w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                } ${
                  isScrolled ? 'bg-white' : 'bg-white'
                }`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
                } ${
                  isScrolled ? 'bg-white' : 'bg-white'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Fullscreen overlay */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-40">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-300 ease-out animate-fadeIn" 
              onClick={() => setIsOpen(false)} 
              aria-hidden="true"
            ></div>
            
            {/* Menu Panel */}
            <div className="absolute top-0 right-0 h-full w-full sm:w-96 glass-dark border-l border-white/10 shadow-2xl transform transition-all duration-300 ease-out animate-slideInRight" role="dialog" aria-modal="true">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Menu
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 rounded-xl glass hover:glass-dark transition-all duration-300 hover:scale-105" 
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-300 hover:text-white transition-colors duration-300" />
              </button>
            </div>
            
            {/* Navigation Items */}
            <div className="p-6 space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 transform ${
                    activeSection === item.href.substring(1)
                      ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/30 scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Resume Button */}
              <div className="pt-4" style={{
                animationDelay: `${navItems.length * 50}ms`,
                animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
              }}>
                <Button 
                  onClick={handleDownloadCV} 
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-neon-blue/30"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
