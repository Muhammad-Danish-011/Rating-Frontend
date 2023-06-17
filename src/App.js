import React, { useState } from 'react';
import RatingUI from './components/rating';

const App = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };

  return (
    <div>
      <h1>Rating</h1>
      <RatingUI value={rating} onChange={handleRatingChange} />
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default App;
