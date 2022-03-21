import React, { useEffect, useState } from 'react';

const Qoutes = () => {
  const [qoute, setQoute] = useState('');
  // const [source, setSource] = useState('');
  useEffect(async () => {
    const index = Math.floor(Math.random() * 15);
    const response = await fetch('https://dummyjson.com/quotes/random');
    const result = await response.json();
    const image = await fetch('https://api.pexels.com/v1/search?query=nature');
    const imgResult = await image.json();
    // setSource(imgResult.photos[index].src.large);
    console.log(imgResult.photos[index].src.large);
    setQoute(result.quote);
  }, []);

  // const background = {
  //   backgroundImage: `${source}`,
  // };

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
