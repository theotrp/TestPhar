import React, { useState, useEffect } from 'react';
import './Trait.css';

const Trait = () => {
    const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="trait" style={{ left: mousePosition.x, top: mousePosition.y }}></div>
  );
};

export default Trait;
