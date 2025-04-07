
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface ParticleType {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  tx: number; // target x
  ty: number; // target y
  rotation: number; // rotation angle
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>([]);
  const [particles, setParticles] = useState<ParticleType[]>([]);
  const [trailId, setTrailId] = useState(0);
  const [particleId, setParticleId] = useState(0);
  
  // Enhanced colors for a more whimsical feel
  const colors = [
    '#9b87f5', // Primary Purple
    '#7E69AB', // Secondary Purple
    '#D6BCFA', // Light Purple
    '#8B5CF6', // Vivid Purple
    '#D946EF', // Magenta Pink
    '#33C3F0'  // Sky Blue
  ];

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point with higher frequency for comet effect
      const newTrailId = trailId + 1;
      setTrailId(newTrailId);
      setTrails(prev => [...prev, { id: newTrailId, x: e.clientX, y: e.clientY }].slice(-25)); // Increased trail length
    };

    const handleClick = (e: MouseEvent) => {
      setClicked(true);
      setTimeout(() => setClicked(false), 500);
      
      // Create star particles on click
      const newParticles: ParticleType[] = [];
      for (let i = 0; i < 12; i++) { // More particles for a more dramatic effect
        const angle = Math.random() * Math.PI * 2;
        const speed = 50 + Math.random() * 80;
        const size = 5 + Math.random() * 15; // Larger size range
        const rotation = Math.random() * 360; // Random rotation
        
        newParticles.push({
          id: particleId + i,
          x: e.clientX,
          y: e.clientY,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          tx: Math.cos(angle) * speed,
          ty: Math.sin(angle) * speed,
          rotation
        });
      }
      
      setParticleId(particleId + newParticles.length);
      setParticles(prev => [...prev, ...newParticles]);
      
      // Remove particles after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.includes(p)));
      }, 1500); // Extended duration for particles
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('click', handleClick);
    };
  }, [trailId, particleId]);

  // Don't render cursor effects on touch devices
  if ('ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot - more subtle and elegant */}
      <div 
        className="cursor-dot w-10 h-10 bg-transparent border-2 border-primary/25 rounded-full"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          transition: 'transform 0.15s ease-out, opacity 0.2s ease-out',
          opacity: 0.9
        }}
      />
      
      {/* Small cursor core */}
      <div 
        className="cursor-dot w-2.5 h-2.5 bg-primary/70 rounded-full"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 12px rgba(155, 135, 245, 0.6)' 
        }}
      />
      
      {/* Comet-like cursor trail */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (trails.length - index) / trails.length * 0.4,
            width: `${4 + (trails.length - index) / trails.length * 4}px`,
            height: `${4 + (trails.length - index) / trails.length * 4}px`,
            backgroundColor: colors[index % colors.length],
            borderRadius: '50%',
            position: 'fixed',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9998,
            filter: 'blur(1px)',
            transition: 'opacity 0.1s ease-out'
          }}
        />
      ))}
      
      {/* Star particles on click */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            position: 'fixed',
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            pointerEvents: 'none',
            zIndex: 9997,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
            animation: 'star-particle 1.5s ease-out forwards',
            opacity: 1
          }}
        >
          <Star 
            size={particle.size} 
            color={particle.color} 
            fill={particle.color} 
            style={{
              filter: `drop-shadow(0 0 4px ${particle.color})`,
              '--tx': `${particle.tx}px`,
              '--ty': `${particle.ty}px`
            } as React.CSSProperties}
          />
        </div>
      ))}
    </>
  );
};

export default CustomCursor;
