import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RandomQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await axios.get('https://type.fit/api/quotes');
      const randomIndex = Math.floor(Math.random() * response.data.length);
      setQuote(response.data[randomIndex].text);
    };

    fetchQuote(); 
  }, []); 

  const fetchRandomQuote = async () => {
    const response = await axios.get('https://type.fit/api/quotes');
    const randomIndex = Math.floor(Math.random() * response.data.length);
    setQuote(response.data[randomIndex].text);
  };

  return (
    <div className='card'>
        <h1>useEffect()</h1>
      <p>''{quote}''</p>
      <button onClick={fetchRandomQuote}>New quote</button>
    </div>
  );
}
