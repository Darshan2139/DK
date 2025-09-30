import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Code, Folder, AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/data/resume';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [comingSoon, setComingSoon] = useState<{ open: boolean; project?: any }>({ open: false });

  const handleLiveDemo = (project: any) => {
    const status = (project.status || project.demoStatus || 'live') as string;
    if (status === 'coming-soon') {
      setComingSoon({ open: true, project });
      return;
    }
    if (project?.demo) window.open(project.demo, '_blank');
  };

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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue mb-4">
            Projects
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Here are some of the projects I've worked on during my academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Project Card */}
              <div className="glass rounded-2xl overflow-hidden hover:glass-dark transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Semester Badge */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full border border-white/20 backdrop-blur-sm">
                      <Code className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      <span className="text-xs sm:text-sm text-white font-bold">{project.semester}</span>
                    </div>
                  </div>

                  {/* Overlay Buttons - Hidden on mobile, shown on hover for larger screens */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:flex bg-black/40">
                    <Button
                      size="sm"
                      className="bg-neon-blue hover:bg-neon-blue/90 text-black border-2 border-neon-blue font-semibold shadow-lg shadow-neon-blue/50 hover:shadow-neon-blue/70 hover:scale-110 transition-all duration-300 px-4 py-2"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-neon-purple hover:bg-neon-purple/90 text-white border-2 border-neon-purple font-semibold shadow-lg shadow-neon-purple/50 hover:shadow-neon-purple/70 hover:scale-110 transition-all duration-300 px-4 py-2"
                      onClick={() => handleLiveDemo(project)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  {/* Project Title */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 pr-2">
                      {project.name}
                    </h3>
                    <Folder className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
                  </div>


                  {/* Project Description */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-xs sm:text-sm font-semibold text-neon-blue">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan/60 hover:scale-105 transition-all duration-300 cursor-default"
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300 text-xs sm:text-sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-neon-purple to-neon-cyan text-black font-semibold hover:scale-105 transition-transform duration-300 text-xs sm:text-sm"
                      onClick={() => handleLiveDemo(project)}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur"></div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Hint */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="text-gray-500 text-sm">
            {resumeData.ui.projects.moreProjectsText}
          </p>
          <div className="flex justify-center mt-4">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {comingSoon.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setComingSoon({ open: false })}></div>
          <div className="relative glass-dark max-w-lg w-full p-6 rounded-2xl border border-neon-blue/40">
            <button className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10" onClick={() => setComingSoon({ open: false })}>
              <X className="w-5 h-5 text-gray-400" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-neon-blue/20 border border-neon-blue/40">
                <AlertCircle className="w-6 h-6 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold text-white">Deployment coming soon</h3>
            </div>
            <p className="text-gray-300 mb-6">
              The live demo for <span className="text-neon-cyan font-semibold">{comingSoon.project?.name}</span> is being deployed.
              In the meantime, please check out <span className="text-neon-purple font-semibold">{comingSoon.project?.altProject?.name || 'SkillMart'}</span>.
            </p>
            <div className="flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-neon-purple to-neon-cyan text-black font-semibold" onClick={() => {
                const altUrl = comingSoon.project?.altProject?.demo || comingSoon.project?.altProject?.url || '';
                if (altUrl) window.open(altUrl, '_blank');
              }}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Check out {comingSoon.project?.altProject?.name || 'SkillMart'}
              </Button>
              <Button variant="outline" className="flex-1 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10" onClick={() => setComingSoon({ open: false })}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
