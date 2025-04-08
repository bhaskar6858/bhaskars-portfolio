
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 lg:px-8 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 clip-text text-transparent font-bold">Your Name</span>
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground max-w-md text-balance">
            A passionate developer creating elegant solutions with a focus on user experience and clean code.
          </p>
          
          <div className="mt-8 space-y-4">
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
        
        {/* Image */}
        <div className={`perspective ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full h-[500px] preserve-3d animate-float rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
              alt="Portrait" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle className="text-[#33C3F0] hover:text-[#D6BCFA] transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
