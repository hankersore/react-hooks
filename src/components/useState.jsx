import React, { useState } from 'react';

export default function WaterTracker() {
  const [glasses, setGlasses] = useState(0);

  function increment() {
    setGlasses(prevState => prevState + 1);
  }

  return (
    <div className='card'>
        <h1>useState()</h1>
      <p>Today you've drunk {glasses} glasses of water!</p>
      <br />
      <button onClick={increment}>
        +1💧
      </button>
    </div>
  );
}
