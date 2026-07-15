import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = '', onClick }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const hoverConfig = { x: 0, y: 0 };
    
    const onMouseMove = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      // Calculate distance from center
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);
      
      // Pull strength factor (0.3 = 30% of distance)
      hoverConfig.x = x * 0.3;
      hoverConfig.y = y * 0.3;

      gsap.to(button, {
        x: hoverConfig.x,
        y: hoverConfig.y,
        duration: 0.8,
        ease: 'power3.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mousemove', onMouseMove);
    button.addEventListener('mouseleave', onMouseLeave);

    return () => {
      button.removeEventListener('mousemove', onMouseMove);
      button.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <button 
      ref={buttonRef} 
      onClick={onClick}
      className={`magnetic relative overflow-hidden group ${className}`}
    >
      {children}
    </button>
  );
}
