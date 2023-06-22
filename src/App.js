import React, { useState, useEffect } from 'react';
import Wave from "react-wavify"
import './App.css';
import Trait from './Trait';

const App = () => {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setLightPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const container = document.getElementById('container');
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="container" className="container">
      <Trait />
      <Wave
        fill='#1277b0'
        options={{
          height: 20,
          amplitude: 40,
          speed: 0.20,
          position: 'absolute',
          points: 8
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      />
      <div className="phare"></div>
      <div className="caillou"></div>
      <div
        className="light"
        style={{ left: lightPosition.x, top: lightPosition.y }}
      ></div>
    </div>
  );
};

export default App;
