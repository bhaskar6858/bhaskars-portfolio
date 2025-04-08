
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Sidebar from '../components/Sidebar';
import CustomCursor from '../components/CustomCursor';
import { SidebarProvider } from '../components/ui/sidebar';

// This component doesn't use useSidebar since we've modified Sidebar.tsx to manage its own state
const Index: React.FC = () => {
  const [sidebarState, setSidebarState] = useState<'expanded' | 'collapsed'>('expanded');
  
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
      
      {/* Main content - full width when sidebar is collapsed */}
      <main className={`w-full transition-all duration-300 ${sidebarState === 'expanded' ? 'lg:ml-64' : 'ml-0'}`}>
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
