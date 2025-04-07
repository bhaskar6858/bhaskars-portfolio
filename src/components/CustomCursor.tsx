
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
  
  // Sky blue color for stars
  const skyBlue = '#33C3F0';

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
      
      // Create star particles on click - all sky blue
      const newParticles: ParticleType[] = [];
      for (let i = 0; i < 15; i++) { // More stars
        const angle = Math.random() * Math.PI * 2;
        const speed = 40 + Math.random() * 100; // Varied speed for better spread
        const size = 4 + Math.random() * 12; // Smaller size range for small stars
        const rotation = Math.random() * 360; // Random rotation
        
        newParticles.push({
          id: particleId + i,
          x: e.clientX,
          y: e.clientY,
          size,
          color: skyBlue, // All stars are sky blue
          tx: Math.cos(angle) * speed,
          ty: Math.sin(angle) * speed + 30, // Add gravity effect by making them fall downward
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
  }, [trailId, particleId, skyBlue]);

  // Don't render cursor effects on touch devices
  if ('ontouchstart' in window) {
    return null;
  }

  return (
    <>
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
            backgroundColor: skyBlue,
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
