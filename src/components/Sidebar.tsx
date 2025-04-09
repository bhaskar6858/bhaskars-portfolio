import React, { useState, useEffect } from 'react';
import { Menu, X, Home, FolderOpen, FileText, Mail } from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active: boolean;
}

interface SidebarProps {
  onStateChange?: (state: 'expanded' | 'collapsed') => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href, active }) => {
  return (
    <a 
      href={href} 
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
        active 
          ? 'bg-secondary text-primary font-medium' 
          : 'text-muted-foreground hover:bg-secondary/50 hover:text-primary'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </a>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ onStateChange }) => {
  const [isOpen, setIsOpen] = useState(true); // Set to true initially to show sidebar by default
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Notify parent component of state change
    if (onStateChange) {
      onStateChange(newState ? 'expanded' : 'collapsed');
    }
  };
  
  const navItems = [
    { icon: Home, label: 'Home', href: '#home', id: 'home' },
    { icon: FolderOpen, label: 'Projects', href: '#projects', id: 'projects' },
    { icon: FileText, label: 'Resume', href: '#resume', id: 'resume' },
    { icon: Mail, label: 'Contact', href: '#contact', id: 'contact' }
  ];
  
  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = navItems.map(item => ({
        id: item.id,
        offset: document.getElementById(item.id)?.offsetTop || 0
      }));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset - 200) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Mobile menu button - always visible on mobile */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-screen w-64 bg-background border-r border-border z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo/Brand */}
          <div className="mb-10">
            <h2 className="text-xl font-bold">Portfolio</h2>
            <p className="text-sm text-muted-foreground">Aspiring ML Engineer</p>
          </div>
          
          {/* Nav items */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                active={activeSection === item.id}
              />
            ))}
          </nav>
          
          {/* Social Media Icons - Horizontally aligned */}
          <div className="mt-auto pt-6 border-t border-border flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/bhaskar-singh-441284215/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary/50 rounded-full">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://x.com/imSbhaskar" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary/50 rounded-full">
              <img src="/x.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://github.com/bhaskar6858" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary/50 rounded-full">
              <img src="/Github.png" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/bhaskar6858/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-secondary/50 rounded-full">
              <img src="/leetcode.png" alt="LeetCode" className="w-6 h-6" />
            </a>
          </div>
          
          {/* Bottom content */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} .All rights reserved.
            </p>
          </div>
        </div>
      </aside>
      
      {/* Backdrop for mobile - only shows when sidebar is open */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
