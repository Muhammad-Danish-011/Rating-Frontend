import React from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';

// Define custom styles using styled from @mui/system
const StyledRating = styled(Rating)({
  color: '#FFD700', // Set the color to a gold/yellow shade
  fontSize: '2rem', // Increase the font size
  // Add more custom styles here as needed
});

const RatingUI = ({ value, onChange }) => {
  return (
    
    <StyledRating
      
      name="rating"
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
    />
  );
};

export default RatingUI;
