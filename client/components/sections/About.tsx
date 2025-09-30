import { useEffect, useRef, useState } from 'react';
import { resumeData } from '@/data/resume';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
            About Me
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} order-1 lg:order-none`}>
            <div className="relative mx-auto w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80">
              {/* Rotating Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan animate-spin" style={{ animationDuration: '8s' }}>
                <div className="absolute inset-2 rounded-full bg-background"></div>
              </div>

              {/* Profile Image */}
              <img
                src={resumeData.personal.profileImage}
                alt={resumeData.personal.name}
                className="relative z-10 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 rounded-full object-cover mx-auto mt-4 border-4 border-white/10"
              />

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 sm:w-4 h-3 sm:h-4 bg-neon-blue rounded-full animate-float"></div>
              <div className="absolute bottom-8 left-8 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-neon-purple rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-4 w-2 sm:w-3 h-2 sm:h-3 bg-neon-cyan rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>

          {/* About Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} order-2 lg:order-none`}>
            <div className="space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center lg:text-left">
                {resumeData.about}
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 pt-6">
                <div className="glass p-3 sm:p-4 md:p-6 rounded-lg hover:glass-dark transition-all duration-300 group text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-blue mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    2+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    Years of Learning
                  </div>
                </div>

                <div className="glass p-3 sm:p-4 md:p-6 rounded-lg hover:glass-dark transition-all duration-300 group text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-purple mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    10+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    Technologies
                  </div>
                </div>

                <div className="glass p-3 sm:p-4 md:p-6 rounded-lg hover:glass-dark transition-all duration-300 group text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-cyan mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    5+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    Projects
                  </div>
                </div>

                <div className="glass p-3 sm:p-4 md:p-6 rounded-lg hover:glass-dark transition-all duration-300 group text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-pink mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    3+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    Certifications
                  </div>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="pt-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-neon-blue mb-4 text-center lg:text-left">Core Skills</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                  {resumeData.technologies.languages.slice(0, 4).map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-1 sm:py-2 glass rounded-full text-xs sm:text-sm font-medium text-neon-cyan hover:glass-dark transition-all duration-300 hover:scale-105 cursor-default"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
