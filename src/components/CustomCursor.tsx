
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
  const [trails, setTrails] = useState<{ id: number; x: number; y: number; createdAt: number }[]>([]);
  const [particles, setParticles] = useState<ParticleType[]>([]);
  const [trailId, setTrailId] = useState(0);
  const [particleId, setParticleId] = useState(0);
  
  // Sky blue color for stars
  const skyBlue = '#33C3F0';

  // Add the keyframe animation styles to the document head
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes star-particle {
        0% {
          transform: translate(-50%, -50%) rotate(${Math.random() * 360}deg) scale(0.2);
          opacity: 0;
        }
        10% {
          opacity: 1;
          transform: translate(-50%, -50%) rotate(${Math.random() * 360}deg) scale(1);
        }
        100% {
          transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) rotate(${Math.random() * 720}deg) scale(0.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point with timestamp for fade out effect
      const newTrailId = trailId + 1;
      setTrailId(newTrailId);
      setTrails(prev => [...prev, { 
        id: newTrailId, 
        x: e.clientX, 
        y: e.clientY,
        createdAt: Date.now()
      }].slice(-35)); // Increased trail length for smoother effect
    };

    const handleClick = (e: MouseEvent) => {
      setClicked(true);
      setTimeout(() => setClicked(false), 500);
      
      // Create star particles on click - all sky blue with varied sizes
      const newParticles: ParticleType[] = [];
      for (let i = 0; i < 20; i++) { // More stars
        const angle = Math.random() * Math.PI * 2;
        const speed = 40 + Math.random() * 120; // Increased speed for better spread
        const size = 6 + Math.random() * 14; // Larger size range for more noticeable stars
        const rotation = Math.random() * 360; // Random rotation
        
        newParticles.push({
          id: particleId + i,
          x: e.clientX,
          y: e.clientY,
          size,
          color: skyBlue, // All stars are sky blue
          tx: Math.cos(angle) * speed,
          ty: Math.sin(angle) * speed + 40, // Add stronger gravity effect for downward spread
          rotation
        });
      }
      
      setParticleId(particleId + newParticles.length);
      setParticles(prev => [...prev, ...newParticles]);
      
      // Remove particles after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.includes(p)));
      }, 2000); // Extended duration for particles
    };

    // Clean up old trail points based on time
    const cleanupTrails = () => {
      const now = Date.now();
      setTrails(prev => prev.filter(trail => now - trail.createdAt < 800)); // 800ms lifespan for trails
    };

    const cleanupInterval = setInterval(cleanupTrails, 50);
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('click', handleClick);
      clearInterval(cleanupInterval);
    };
  }, [trailId, particleId, skyBlue]);

  // Don't render cursor effects on touch devices
  if ('ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Comet-like cursor trail */}
      {trails.map((trail, index) => {
        // Calculate how old this trail point is (0 = new, 1 = old)
        const age = (Date.now() - trail.createdAt) / 800;
        return (
          <div
            key={trail.id}
            className="cursor-trail"
            style={{
              left: `${trail.x}px`,
              top: `${trail.y}px`,
              opacity: Math.max(0, 0.4 - age * 0.4), // Fade out based on age
              width: `${7 + (trails.length - index) / trails.length * 7}px`,
              height: `${7 + (trails.length - index) / trails.length * 7}px`,
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
        );
      })}
      
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
            animation: 'star-particle 2s ease-out forwards', // Longer animation
            opacity: 1,
            '--tx': `${particle.tx}px`,
            '--ty': `${particle.ty}px`
          } as React.CSSProperties}
        >
          <Star 
            size={particle.size} 
            color={particle.color} 
            fill={particle.color} 
            style={{
              filter: `drop-shadow(0 0 6px ${particle.color})` // More glow
            }}
          />
        </div>
      ))}
    </>
  );
};

export default CustomCursor;
