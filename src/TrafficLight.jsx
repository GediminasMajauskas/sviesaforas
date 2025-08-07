import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

export default function TrafficLight() {
  const spalvos = ['red', 'yellow', 'green'];
  const [colorIndex, setColorIndex] = useState(0);
  const [laikas, setLaikas] = useState(5); 
  useEffect(() => {
    const timer = setInterval(() => {
      setLaikas((prev) => {
        if (prev === 1) {
          ``
          setColorIndex((index) => (index + 1) % spalvos.length);
          return 5; // naujas laikas
        }
        return prev - 1;
      });
    }, 1000); // = 1 sekundė

    return () => clearInterval(timer); 
  }, []);

  const aktyviSpalva = spalvos[colorIndex];

  return (
    <div className="wrapper">
      <h2>🚦 Automatinis šviesoforas</h2>

      <div className="sviesoforas">
        {spalvos.map((spalva) => (
          <div
            key={spalva}
            className={`lempute ${spalva} ${aktyviSpalva === spalva ? 'aktyvi' : ''}`}
          ></div>
        ))}
      </div>

      <p>⏱️ Keisis už: <strong>{laikas}</strong> s</p>
    </div>
  );
}