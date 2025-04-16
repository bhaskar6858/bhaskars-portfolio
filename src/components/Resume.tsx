import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Resume: React.FC = () => {
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation(0.1);
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation(0.1);

  return (
    <section id="resume" className="pt-4 pb-20"> {/* Adjusted scroll behavior */}
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="flex flex-col items-start mb-12">
          <div className="text-left mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-muted-foreground max-w-2xl">
              My qualifications and skills.
            </p>
          </div>
        </div>

        {/* Centered Button Above Education with Animation */}
        <div className="flex justify-center mb-8">
          <Button
            asChild
            className="inline-flex items-center justify-center gap-6 px-12 py-6 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none"
          >
            <a
              href="/Bhaskar Singh Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 text-4xl font-bold"
            >
              <ExternalLink size={24} />
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
              <div className="relative pl-8 border-l border-border">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>

                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h4 className="font-bold">B.Tech Computer Science and Engineering with specialization in AI & ML</h4>
                    <span className="text-sm px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                      2022-2026
                    </span>
                  </div>
                  <h2 className="text-sm text-muted-foreground mb-3">Graphic Era Deemed to be University, Dehradun, Uttarakhand</h2>
                  <h2 className="text-sm text-muted-foreground mb-3">8.2 CGPA</h2>
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
              "Java", "Python", "OOP's",
              "Artificial Intelligence", "Machine Learning", "Deep Learning", "MLOPS",
              "Scikit Learn", "Gen AI", "TensorFlow", "Pytorch", "MySQL",
              "Git", "AWS", "HTML5", "CSS"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white border border-gray-200 rounded-xl p-4 text-center text-gray-800 shadow-sm hover:shadow-md transition-shadow"
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
