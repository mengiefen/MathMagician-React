import React, { useEffect, useState } from 'react';

const Qoutes = () => {
  const [qoute, setQoute] = useState('');
  useEffect(async () => {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const result = await response.json();
    setQoute(result.quote);
  }, []);

  return (
    <div
      className="quote-page"
      style={{
        backgroundImage:
          'https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      }}
    >
      <h1 className="quote">{qoute}</h1>
    </div>
  );
};

export default Qoutes;
