import React, { useState } from 'react';
import './TrafficLight.css'; // <- svarbu

export default function TrafficLight() {
  const [color, setColor] = useState('red');
  const colors = ['red', 'green', 'yellow'];

  const keistiSpalva = () => {
    const index = colors.indexOf(color);
    const next = (index + 1) % colors.length;
    setColor(colors[next]);
  };

  return (
    <div className="wrapper">
      <h2>---Šviesoforas---</h2>

      <div className="sviesoforas">
        {colors.map((spalva) => (
          <div
            key={spalva}
            className={`lempute ${spalva} ${color === spalva ? 'aktyvi' : ''}`}
          ></div>
        ))}
      </div>

      <button onClick={keistiSpalva}> ---Keisti spalvą---</button>
    </div>
  );
}