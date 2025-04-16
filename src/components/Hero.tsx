import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowDownCircle } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 lg:px-8 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} mt-12 lg:mt-23`} style={{ animationDelay: '0.2s' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.25] text-balance">
            Hola!, I'm <br />
            <TypeAnimation
              sequence={['Bhaskar Singh', 1000]}
              speed={40}
              wrapper="span"
              repeat={0}
              cursor={false}
              className="bg-gradient-to-r from-[#8A65DF] to-[#33C3F0] clip-text text-transparent font-bold inline-block leading-[1.25] pb-1"
            />
          </h1>

          <p className="mt-4 text-sm leading-snug text-muted-foreground max-w-xl text-balance overflow-hidden">
            Just like Bran Stark who could see beyond time, I dive deep into the layers of data, extracting hidden patterns and truths through the lens of Machine Learning and Deep Learning. I navigate datasets using tools like Pandas, NumPy, and Scikit-learn. I train models that don't just learn — they adapt.
            <br /><br />
            Like Jon Snow is unmatched with a sword on the battlefield, I’m unbeatable with Machine Learning algorithms — mastering not just how they work, but why they work. I understand their mathematical foundations and can bring them to life in Python with precision.
            <br /><br />
            Whether it's Convolutional Neural Networks that see the world like Aslan or Recurrent Neural Networks, LSTMs and Bidirectional RNNs that remember like the Three-Eyed Raven, I engineer intelligent solutions.
            <br /><br />
            From TensorFlow to Transformers like BERT, I build systems that not only predict but understand. In this ever-evolving realm of algorithms, I don’t just follow trends — I forge my own path.
            <br /><br />
            I turn your ideas into codes — powered by efficient Data Structures and Algorithms, and clean implementation in Java and Python. With strong Object-Oriented essence, I build software that’s not just functional, but future-ready.
            <br /><br />
            In a world where technology never stands still, I adapt swiftly to every wave of innovation. My technical and programming skills are designed not just to survive the future — but to age like fine wine, getting better, sharper, and more refined with time.
            <br /><br />

            <span className="inline-block animate-fade-in font-semibold text-muted-foreground">
              HIRE ME — AND NEVER REGRET
            </span>

            <br /> <br />
            <span className="inline-block pl-6">
              “Because great code makes great results"
            </span>

          </p>

          <div className="mt-8 space-y-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Portrait Image */}
        <div className={`perspective ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="relative w-full max-w-md mx-auto preserve-3d animate-float rounded-2xl overflow-hidden shadow-2xl">
            <AspectRatio ratio={3 / 4} className="bg-muted">
              <img
                src="bhaskar.jpg"
                alt="Bhaskar Singh"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </AspectRatio>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle className="text-[#33C3F0] hover:text-[#D6BCFA] transition-colors" />
      </a>
    </section>
  );
};

export default Hero;
