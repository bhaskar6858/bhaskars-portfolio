
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';
import CustomCursor from '../components/CustomCursor';

// This component doesn't use SidebarProvider since Sidebar manages its own state
const Index: React.FC = () => {
  const [sidebarState, setSidebarState] = useState<'expanded' | 'collapsed'>('expanded');
  
  // Add a class to the body to enable the content area styling
  useEffect(() => {
    document.body.classList.add('has-sidebar');
    
    return () => {
      document.body.classList.remove('has-sidebar');
    };
  }, []);
  
  // Function to handle sidebar state changes
  const handleSidebarStateChange = (state: 'expanded' | 'collapsed') => {
    setSidebarState(state);
  };
  
  return (
    <div className="flex min-h-screen w-full">
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Sidebar with state change callback */}
      <Sidebar onStateChange={handleSidebarStateChange} />
      
      {/* Main content - full width when sidebar is collapsed */}
      <main className={`flex-1 transition-all duration-300 ${sidebarState === 'expanded' ? 'lg:ml-64' : 'ml-0'}`}>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
