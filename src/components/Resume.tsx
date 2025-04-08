
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Resume: React.FC = () => {
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation(0.1);
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation(0.1);
  
  return (
    <section id="resume" className="py-20">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-muted-foreground max-w-2xl">
              My qualifications and skills.
            </p>
          </div>
          
          <Button 
            asChild
            className="inline-flex items-center gap-2 px-8 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
              <span>View Full CV</span>
            </a>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-1 gap-10 max-w-3xl mx-auto">
          {/* Education */}
          <div 
            ref={educationRef as React.RefObject<HTMLDivElement>}
            className={`${educationVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {/* Education item */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h4 className="font-bold">B.Tech Computer Science and Engineering</h4>
                    <span className="text-sm px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      2020 - 2024
                    </span>
                  </div>
                  <h5 className="text-sm text-muted-foreground mb-3">University Name</h5>
                  <p className="text-muted-foreground">
                    Specialization in Artificial Intelligence and Machine Learning. Coursework in data structures, algorithms, machine learning, and software engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills */}
        <div 
          ref={skillsRef as React.RefObject<HTMLDivElement>}
          className={`mt-16 ${skillsVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-primary" />
            <h3 className="text-2xl font-bold">Skills</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "JavaScript", "TypeScript", "React", "Node.js",
              "HTML5", "CSS3", "Tailwind CSS", "Redux",
              "Python", "TensorFlow", "PyTorch", "Machine Learning",
              "Git", "Docker", "AWS", "UI/UX Design"
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-card border border-border rounded-lg p-4 text-center hover:bg-secondary/50 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
