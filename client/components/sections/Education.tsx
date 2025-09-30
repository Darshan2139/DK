import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { resumeData } from '@/data/resume';

export default function Education() {
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="education">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-4">
            Education
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-0.5 sm:w-1 bg-gradient-to-b from-neon-purple to-neon-cyan h-full rounded-full"></div>

          {resumeData.education.map((edu, index) => (
            <div
              key={index}
              className={`relative mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline Node */}
              <div className="absolute left-2 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-neon-purple rounded-full border-2 sm:border-4 border-background z-10 animate-pulse-slow"></div>

              {/* Content Card */}
              <div className={`w-full pl-10 sm:pl-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:ml-auto lg:pl-16' : 'lg:mr-auto lg:pr-16'}`}>
                <div className="glass p-4 sm:p-6 lg:p-8 rounded-xl hover:glass-dark transition-all duration-500 group hover:scale-105">
                  {/* Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-neon-purple group-hover:text-neon-cyan transition-colors duration-300">
                        {edu.institution}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 font-medium">{edu.degree}</p>
                    </div>
                  </div>

                  {/* Duration and Score */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 text-neon-cyan">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neon-blue">
                      <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">
                        {edu.cgpa.includes('%') ? 'Score' : 'CGPA'}: {edu.cgpa}
                      </span>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Relevant Coursework</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group/course"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full group-hover/course:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-gray-300 group-hover/course:text-white transition-colors duration-300">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Score Visual */}
                  <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-purple/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white">Academic Performance</span>
                      <span className="text-lg font-bold text-neon-cyan">
                        {edu.cgpa.includes('%') ? edu.cgpa : `${edu.cgpa}/10.0`}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${
                            edu.cgpa.includes('%')
                              ? parseFloat(edu.cgpa.replace('%', ''))
                              : (parseFloat(edu.cgpa) / 10) * 100
                          }%` : '0%',
                          transitionDelay: `${index * 200 + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
