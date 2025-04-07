
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';
import CustomCursor from '../components/CustomCursor';

const Index: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Add a class to the body to enable the content area styling
  useEffect(() => {
    document.body.classList.add('has-sidebar');
    
    return () => {
      document.body.classList.remove('has-sidebar');
    };
  }, []);
  
  return (
    <div className="flex min-h-screen">
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <main className={`w-full transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
