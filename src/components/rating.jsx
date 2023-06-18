import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const StyledRating = styled(Rating)({
  color: '#FFD700',
  fontSize: '2rem',
});

const RatingUI = ({ value, onChange }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRatingChange = (event, newValue) => {
    onChange(newValue);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <StyledRating
        name="rating"
        value={value}
        onChange={handleRatingChange}
      />
      <Button onClick={handleFormSubmit} variant="contained" color="primary">
        Submit
      </Button>
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Thanks for rating</DialogTitle>
        <DialogContent>
          {/* Additional content can be added here if needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RatingUI;
