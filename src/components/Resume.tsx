
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';

const Resume: React.FC = () => {
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation(0.1);
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation(0.1);
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation(0.1);
  
  return (
    <section id="resume" className="py-20">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-muted-foreground max-w-2xl">
              My professional journey, skills, and qualifications.
            </p>
          </div>
          
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Experience */}
          <div 
            ref={experienceRef as React.RefObject<HTMLDivElement>}
            className={`${experienceVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="text-primary" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {/* Experience item */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Senior Developer</h4>
                    <span className="text-sm px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      2022 - Present
                    </span>
                  </div>
                  <h5 className="text-sm text-muted-foreground mb-3">Company Name</h5>
                  <p className="text-muted-foreground">
                    Led development of multiple web applications, mentored junior developers, and implemented best practices.
                  </p>
                </div>
              </div>
              
              {/* Experience item */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Web Developer</h4>
                    <span className="text-sm px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      2019 - 2022
                    </span>
                  </div>
                  <h5 className="text-sm text-muted-foreground mb-3">Previous Company</h5>
                  <p className="text-muted-foreground">
                    Developed responsive web applications, collaborated with design team, and implemented new features.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div 
            ref={educationRef as React.RefObject<HTMLDivElement>}
            className={`${educationVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
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
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Master's in Computer Science</h4>
                    <span className="text-sm px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      2017 - 2019
                    </span>
                  </div>
                  <h5 className="text-sm text-muted-foreground mb-3">University Name</h5>
                  <p className="text-muted-foreground">
                    Specialized in Web Development and Data Science. Graduated with honors.
                  </p>
                </div>
              </div>
              
              {/* Education item */}
              <div className="relative pl-8 border-l border-border">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Bachelor's in Computer Science</h4>
                    <span className="text-sm px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      2013 - 2017
                    </span>
                  </div>
                  <h5 className="text-sm text-muted-foreground mb-3">University Name</h5>
                  <p className="text-muted-foreground">
                    Coursework in algorithms, data structures, and software engineering.
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
              "MongoDB", "PostgreSQL", "GraphQL", "Express",
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
