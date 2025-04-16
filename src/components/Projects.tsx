import React from 'react';
import ProjectCard from './ProjectCard';
import { useProgressiveAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'Text Classification',
    description: 'A hybrid CNN + Bidirectional LSTM (RNN) model to classify news articles into categories.',
    technologies: ['NLP', 'CNN', 'Bidirectional LSTM', 'Text Vectorization'],
    image: 'News1.jpg',
    github: 'https://github.com/bhaskar6858/Text-Classification-using-CNN-and-RNN',
    live: 'https://example.com'
  },
  {
    title: 'New York Taxi Fare Prediction',
    description: 'Predicting taxi fares using New York taxi dataset',
    technologies: ['Random Forest', 'Decision Tree', 'Linear Regression', 'SVR'],
    image: 'nyc.jpg',
    github: 'https://github.com/bhaskar6858/New-York-Taxi-Fare-Prediction-using-Machine-Learning',
    live: 'https://example.com'
  },
  {
    title: 'MLDecode: A Chatbot',
    description: 'A chatbot that explains machine learning terms and algorithms in simple language',
    technologies: ['Transformers', 'Tensorflow', 'Fast API', 'HTML-CSS-JS'],
    image: 'bot.jpg',
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
    title: 'Fake News Detection and Sentiment Analysis',
    description: 'A Deep Learning model that detects fake news articles using NLP and classification techniques, and analysis sentiment',
    technologies: ['NLP', 'BERT', 'DistilBERT'],
    image: 'fake.jpg',
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Speech to Text',
    description: 'A Speech-to-Text tool that transcribes spoken language into text in real-time',
    technologies: ['Speech Recognition', 'PyAudio', 'DeepSpeech', 'GoogleSpeechAPI'],
    image: 'text.png',
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
              className="flex flex-col h-full"
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
