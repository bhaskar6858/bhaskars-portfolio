
import React, { useEffect, useState } from 'react';

interface ParticleType {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  tx: number; // target x
  ty: number; // target y
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>([]);
  const [particles, setParticles] = useState<ParticleType[]>([]);
  const [trailId, setTrailId] = useState(0);
  const [particleId, setParticleId] = useState(0);
  const colors = ['#4299E1', '#9F7AEA', '#ED64A6'];

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point
      const newTrailId = trailId + 1;
      setTrailId(newTrailId);
      setTrails(prev => [...prev, { id: newTrailId, x: e.clientX, y: e.clientY }].slice(-15));
    };

    const handleClick = (e: MouseEvent) => {
      setClicked(true);
      setTimeout(() => setClicked(false), 500);
      
      // Create particles on click
      const newParticles: ParticleType[] = [];
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 50 + Math.random() * 50;
        const size = 3 + Math.random() * 5;
        
        newParticles.push({
          id: particleId + i,
          x: e.clientX,
          y: e.clientY,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          tx: Math.cos(angle) * speed,
          ty: Math.sin(angle) * speed
        });
      }
      
      setParticleId(particleId + newParticles.length);
      setParticles(prev => [...prev, ...newParticles]);
      
      // Remove particles after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.includes(p)));
      }, 1000);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('click', handleClick);
    };
  }, [trailId, particleId]);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="cursor-dot w-8 h-8 bg-transparent border-2 border-primary/40 rounded-full"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          transition: 'transform 0.15s ease-out'
        }}
      />
      
      {/* Small cursor core */}
      <div 
        className="cursor-dot w-2 h-2 bg-primary"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      />
      
      {/* Cursor trail */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail animate-cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (trails.length - index) / trails.length * 0.5,
            width: `${4 + (trails.length - index) / trails.length * 6}px`,
            height: `${4 + (trails.length - index) / trails.length * 6}px`
          }}
        />
      ))}
      
      {/* Click particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle animate-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            '--tx': `${particle.tx}px`,
            '--ty': `${particle.ty}px`
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

export default CustomCursor;
