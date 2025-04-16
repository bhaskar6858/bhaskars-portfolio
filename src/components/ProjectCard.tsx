import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
  delay: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  github,
  live,
  delay,
  isVisible
}) => {
  return (
    <div 
      className={`group flex flex-col h-full bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Project image */}
      {image && (
        <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold">{title}</h3>
        
        <p className="mt-2 text-muted-foreground text-sm flex-grow-1">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="mt-6 flex items-center gap-4">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <Github size={16} className="group-hover/link:animate-pulse" />
              <span>GitHub</span>
            </a>
          )}
          
          {live && (
            <a 
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
