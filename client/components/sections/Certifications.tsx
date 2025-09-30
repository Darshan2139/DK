import { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/data/resume';
import { portfolioConfig } from '@/portfolio-config';

interface CertificationModalProps {
  certification: typeof resumeData.certifications[0];
  isOpen: boolean;
  onClose: () => void;
}

function CertificationModal({ certification, isOpen, onClose }: CertificationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative glass-dark p-8 rounded-2xl max-w-2xl w-full border border-neon-blue/50 animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
        >
          <X className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          {/* Certificate Image */}
          <div className="relative h-64 rounded-xl overflow-hidden">
            <img
              src={certification.image}
              alt={certification.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>

          {/* Certificate Details */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              {certification.name}
            </h3>
            
            <div className="flex items-center gap-4 text-neon-cyan">
              <span className="font-semibold">{certification.issuer}</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{certification.date}</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {certification.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold"
              onClick={() => {
                const targetUrl = certification.link && certification.link !== '#' ? certification.link : certification.image;
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Certificate
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<typeof resumeData.certifications[0] | null>(null);
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
    <>
      <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="certifications">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue mb-4">
              Certifications
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              Professional certifications and achievements that validate my skills
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {resumeData.certifications.map((cert, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Certificate Card */}
                <div 
                  className="glass p-6 rounded-2xl hover:glass-dark transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:-rotate-1"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Certificate Image */}
                  <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-neon-blue/20 backdrop-blur-sm rounded-full p-4 border border-neon-blue/50">
                        <Award className="w-8 h-8 text-neon-blue" />
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black text-xs font-bold px-3 py-1 rounded-full">
                      {cert.date}
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2">
                      {cert.name}
                    </h3>
                    
                    <p className="text-neon-blue font-semibold">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                      {cert.description}
                    </p>
                  </div>

                  {/* Click Indicator */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <span>Click to view details</span>
                      <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                    </div>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-neon-blue hover:text-white hover:bg-neon-blue/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 blur"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info and View More Link */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="glass p-8 rounded-2xl inline-block">
              <h3 className="text-2xl font-bold text-neon-purple mb-4">Continuous Learning</h3>
              <p className="text-gray-400 max-w-2xl mb-6">
                I believe in continuous learning and staying updated with the latest technologies.
                These certifications represent my commitment to professional growth and excellence.
              </p>

              {/* View More Certificates Button */}
              <div className="mt-6">
                <Button
                  onClick={() => window.open(portfolioConfig.certificationsFolder, '_blank')}
                  className="group relative overflow-hidden bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    View More Certificates
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <CertificationModal
          certification={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  );
}
