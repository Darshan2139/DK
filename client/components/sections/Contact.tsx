import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/data/resume';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }).toString()
      });

      if (response.ok) {
        // Success - show success message
        alert('Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Error - show error message and fallback to mailto
      console.error('Form submission error:', error);
      alert('Sorry, there was an issue sending your message. Opening your email client as backup...');

      // Fallback to mailto
      const mailtoURL = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Hi Darshan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      )}`;
      window.location.href = mailtoURL;
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: resumeData.personal.email,
      href: `mailto:${resumeData.personal.email}`,
      colorClasses: {
        bg: 'from-neon-blue/20 to-neon-blue/40',
        text: 'text-neon-blue'
      }
    },
    {
      icon: Phone,
      label: 'Phone',
      value: resumeData.personal.phone,
      href: `tel:${resumeData.personal.phone}`,
      colorClasses: {
        bg: 'from-neon-purple/20 to-neon-purple/40',
        text: 'text-neon-purple'
      }
    },
    {
      icon: MapPin,
      label: 'Location',
      value: resumeData.personal.location,
      href: '#',
      colorClasses: {
        bg: 'from-neon-cyan/20 to-neon-cyan/40',
        text: 'text-neon-cyan'
      }
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: resumeData.personal.github,
      colorClasses: {
        text: 'text-neon-blue'
      }
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: resumeData.personal.linkedin,
      colorClasses: {
        text: 'text-neon-cyan'
      }
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${resumeData.personal.email}`,
      colorClasses: {
        text: 'text-neon-purple'
      }
    }
  ];

  return (
    <section ref={sectionRef} className="pt-4 pb-12 sm:py-16 lg:py-20 px-4 sm:px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple mb-4">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Let's connect! I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} order-1 lg:order-none`}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue mb-4 sm:mb-6 text-center lg:text-left">
                Let's Connect
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8 text-center lg:text-left px-4 lg:px-0">
                Feel free to reach out if you have any questions, want to collaborate on a project,
                or just want to say hello. I'll do my best to get back to you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="glass p-4 sm:p-5 lg:p-6 rounded-xl hover:glass-dark transition-all duration-300 group hover:scale-105 block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${contact.colorClasses.bg} group-hover:rotate-12 transition-transform duration-300 flex-shrink-0`}>
                      <contact.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${contact.colorClasses.text}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-400 mb-1">{contact.label}</p>
                      <p className="text-sm sm:text-base text-white font-medium group-hover:text-neon-cyan transition-colors duration-300 truncate">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-neon-purple mb-3 sm:mb-4 text-center lg:text-left">Follow Me</h4>
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 glass rounded-xl hover:glass-dark transition-all duration-300 group hover:scale-110 hover:rotate-6"
                    title={social.label}
                  >
                    <social.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${social.colorClasses.text} group-hover:text-white transition-colors duration-300`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} order-2 lg:order-none`}>
            <form
              onSubmit={handleSubmit}
              className="glass p-4 sm:p-6 lg:p-8 rounded-2xl hover:glass-dark transition-all duration-500"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-4 sm:mb-6 text-center lg:text-left">
                Send Message
              </h3>

              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="space-y-4 sm:space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 group-hover:border-white/40 text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300 group-hover:border-white/40 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/20 transition-all duration-300 group-hover:border-white/40 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-none group-hover:border-white/40 text-sm sm:text-base"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold py-3 sm:py-4 rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass p-8 rounded-2xl inline-block">
            <MessageCircle className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Start a Project?</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              I'm always excited to work on interesting projects and collaborate with passionate people.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold"
                onClick={() => window.location.href = `mailto:${resumeData.personal.email}`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button
                variant="outline"
                className="border-neon-purple text-neon-purple hover:bg-neon-purple/10"
                onClick={() => window.open(resumeData.personal.resumeUrl, '_blank')}
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
