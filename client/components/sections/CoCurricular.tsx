import { useEffect, useRef, useState } from 'react';
import { Trophy, Users, Camera, Award, Calendar, MapPin } from 'lucide-react';
import { resumeData } from '@/data/resume';

const iconMap = {
  trophy: Trophy,
  users: Users,
  camera: Camera,
  award: Award,
};

export default function CoCurricular() {
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
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

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section ref={sectionRef} className="pt-12 pb-6 sm:py-16 lg:py-20 px-4 sm:px-6" id="co-curricular">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-4">
            Co-Curricular Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Beyond academics - my involvement in events, competitions, and community initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {resumeData.coCurricular.map((activity, index) => {
            const IconComponent = iconMap[activity.icon as keyof typeof iconMap] || Trophy;
            const isFlipped = flippedCards.includes(index);
            
            return (
              <div
                key={index}
                className={`relative h-80 perspective-1000 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleCardFlip(index)}
              >
                {/* Card Container */}
                <div className={`relative w-full h-full transition-transform duration-700 preserve-3d cursor-pointer ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}>
                  
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="glass p-8 rounded-2xl h-full hover:glass-dark transition-all duration-500 group hover:scale-105">
                      {/* Icon and Title */}
                      <div className="text-center mb-6">
                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/40 mb-4 group-hover:rotate-12 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-neon-purple" />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300">
                          {activity.title}
                        </h3>
                        <p className="text-neon-purple font-semibold mt-2">{activity.role}</p>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center justify-center gap-2 text-neon-cyan mb-4">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{activity.duration}</span>
                      </div>

                      {/* Click to flip indicator */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                          <span>Click to see details</span>
                          <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 border border-neon-purple/30 rounded-full animate-pulse-slow"></div>
                      <div className="absolute bottom-8 left-4 w-8 h-8 border border-neon-cyan/30 rounded-full animate-float"></div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <div className="glass-dark p-4 sm:p-6 lg:p-8 rounded-2xl h-full border border-neon-purple/50 relative overflow-hidden flex items-center justify-center">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple via-neon-cyan to-neon-blue"></div>
                      </div>

                      <div className="relative z-10 h-full flex flex-col justify-center items-center p-4">
                        {/* Header */}
                        <div className="text-center mb-4 sm:mb-6">
                          <h3 className="text-lg sm:text-xl font-bold text-neon-cyan mb-2">{activity.title}</h3>
                          <p className="text-neon-purple font-semibold text-sm sm:text-base">{activity.role}</p>
                        </div>

                        {/* Description */}
                        <div className="flex-1 flex items-center justify-center w-full">
                          <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-base max-w-full">
                            {activity.description}
                          </p>
                        </div>

                        {/* Duration at bottom */}
                        <div className="flex items-center justify-center gap-2 text-neon-blue mt-3 sm:mt-4">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm font-medium">{activity.duration}</span>
                        </div>

                        {/* Click to flip back */}
                        <div className="text-center mt-3 sm:mt-4">
                          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                            <span>Click to flip back</span>
                            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-blue rounded-2xl opacity-30 -z-10 blur"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className={`mt-6 sm:mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {resumeData.activitiesStats?.map((stat, i) => (
              <div key={i} className="text-center glass p-6 rounded-xl hover:glass-dark transition-all duration-300 group">
                <div className="text-3xl font-bold text-neon-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
