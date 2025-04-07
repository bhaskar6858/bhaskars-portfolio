
import React from 'react';
import ProjectCard from './ProjectCard';
import { useProgressiveAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with cart functionality and payment processing',
    technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather forecasting application with interactive maps',
    technologies: ['React', 'Redux', 'OpenWeather API', 'Mapbox'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'Productivity tool for managing tasks, projects, and team collaboration',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'AI Image Generator',
    description: 'Web application that generates images using AI based on text prompts',
    technologies: ['React', 'OpenAI API', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for monitoring social media performance metrics',
    technologies: ['React', 'Chart.js', 'Social APIs', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Music Streaming App',
    description: 'Spotify-like application for streaming and discovering music',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    github: 'https://github.com',
    live: 'https://example.com'
  },
];

const Projects: React.FC = () => {
  const { refs, visibleItems } = useProgressiveAnimation(0.1, 0.2);
  
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container px-4 lg:px-8 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          A showcase of my latest work, personal projects, and experiments.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              ref={refs(index)}
            >
              <ProjectCard
                {...project}
                delay={0.1 * index}
                isVisible={visibleItems[index] || false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
