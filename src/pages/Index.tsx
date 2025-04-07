
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';
import CustomCursor from '../components/CustomCursor';

const Index: React.FC = () => {
  // Add a class to the body to enable the content area styling
  useEffect(() => {
    document.body.classList.add('has-sidebar');
    
    return () => {
      document.body.classList.remove('has-sidebar');
    };
  }, []);
  
  return (
    <div className="flex">
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <main className="w-full content-area">
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
