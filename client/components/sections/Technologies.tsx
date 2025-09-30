import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Globe, Wrench } from 'lucide-react';
import { resumeData } from '@/data/resume';

interface SkillBarProps {
  skill: string;
  level: number;
  isVisible: boolean;
  delay: number;
}

function SkillBar({ skill, level, isVisible, delay }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-neon-cyan text-sm font-bold">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-full transition-all duration-1000 ease-out relative"
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default function Technologies() {
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

  const skillCategories = [
    {
      title: resumeData.ui.technologies.titles.coreSkills,
      icon: Code2,
      skills: resumeData.technologies.languages,
      colorClasses: {
        bg: "from-neon-blue/20 to-neon-blue/40",
        text: "text-neon-blue",
        border: "border-neon-blue/30 hover:border-neon-blue/60",
        bgHover: "from-neon-blue/10 to-neon-blue/20"
      }
    },
    {
      title: resumeData.ui.technologies.titles.frameworks,
      icon: Globe,
      skills: resumeData.technologies.frameworks,
      colorClasses: {
        bg: "from-neon-purple/20 to-neon-purple/40",
        text: "text-neon-purple",
        border: "border-neon-purple/30 hover:border-neon-purple/60",
        bgHover: "from-neon-purple/10 to-neon-purple/20"
      }
    },
    {
      title: resumeData.ui.technologies.titles.tools,
      icon: Wrench,
      skills: resumeData.technologies.tools,
      colorClasses: {
        bg: "from-neon-cyan/20 to-neon-cyan/40",
        text: "text-neon-cyan",
        border: "border-neon-cyan/30 hover:border-neon-cyan/60",
        bgHover: "from-neon-cyan/10 to-neon-cyan/20"
      }
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="technologies">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-4 leading-[1.15]">
            Technologies
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass p-4 sm:p-6 lg:p-8 rounded-2xl hover:glass-dark transition-all duration-500 group hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-4 sm:mb-6">
                <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${category.colorClasses.bg} mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                  <category.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${category.colorClasses.text}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gradient-to-r ${category.colorClasses.bgHover} border ${category.colorClasses.border} hover:scale-105 transition-all duration-300 group/skill cursor-default text-center sm:text-left`}
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    <span className="text-sm sm:text-base text-white font-medium group-hover/skill:text-neon-cyan transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Levels */}
        <div className={`glass p-4 sm:p-6 lg:p-8 rounded-2xl hover:glass-dark transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple mb-2">
              {resumeData.ui.technologies.headings.proficiency}
            </h3>
            <p className="text-sm sm:text-base text-gray-400 px-4">My current proficiency levels in key technologies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {Object.entries(resumeData.technologies.skillLevels).map(([skill, level], index) => (
              <SkillBar
                key={skill}
                skill={skill}
                level={level as number}
                isVisible={isVisible}
                delay={index * 100 + 800}
              />
            ))}
          </div>
        </div>

        {/* Technology Cloud */}
        <div className={`mt-10 sm:mt-12 lg:mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xl sm:text-2xl font-bold text-neon-blue mb-6 sm:mb-8">{resumeData.ui.technologies.headings.stack}</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4">
            {[...resumeData.technologies.languages, ...resumeData.technologies.frameworks, ...resumeData.technologies.tools].map((tech, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 glass rounded-full text-xs sm:text-sm font-medium hover:glass-dark hover:scale-110 hover:text-neon-cyan transition-all duration-300 cursor-default group"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="group-hover:animate-pulse">{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
