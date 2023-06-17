import React from 'react';
import Rating from '@mui/material/Rating';

const RatingUI = ({ value, onChange }) => {
  return (
    <Rating
      name="rating"
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
    />
  );
};

export default RatingUI;
