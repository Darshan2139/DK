import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <div className="space-y-8">
          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan animate-fadeIn">
            404
          </h1>

          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white animate-slideUp">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-400 animate-slideUp" style={{ animationDelay: '200ms' }}>
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fadeIn" style={{ animationDelay: '400ms' }}>
            <Link to="/">
              <Button
                className="group relative overflow-hidden bg-gradient-to-r from-neon-blue to-neon-purple text-black font-semibold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Back to Home
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>

            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="group relative overflow-hidden border-2 border-neon-cyan text-neon-cyan font-semibold px-8 py-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:bg-neon-cyan/10 hover:shadow-xl hover:shadow-neon-cyan/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </span>
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="pt-8 space-y-4">
            <div className="flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Don't worry, even the best explorers get lost sometimes.
            </p>
          </div>
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}
