import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import moment from 'moment';

const StyledRating = styled(Rating)({
  color: '#FFD700',
  fontSize: '2rem',
});

const RatingUI = ({ value, onChange }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event, newValue) => {
    onChange(newValue);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleFormSubmit = () => {
    const currentDate = new Date();
    const timezoneOffset = currentDate.getTimezoneOffset() * 60000;
    const currentDateTime = new Date(Date.now() - timezoneOffset).toISOString();
    console.log(currentDateTime);
    const newRating = {
      created: currentDateTime,
      updated: currentDateTime,
      appointment_id: 1,
      value: value,
      note: comment,
    };

    fetch('http://localhost:8080/Rating/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRating),
    })
      .then(response => {
        if (response.ok) {
          console.log('Rating and comment saved successfully!');
          setComment('');
          setIsDialogOpen(true);
        } else {
          throw new Error('Error saving rating and comment');
        }
      })
      .catch(error => {
        console.error('Error saving rating and comment:', error);
      });
  };

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  return (
    <>
      <StyledRating name="rating" value={value} onChange={handleRatingChange} />
      <br />
      <br />
      <h4>Add Comments:</h4>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        rows={4}
        cols={50}
        placeholder="Add a comment..."
      />
      <br />
      <br />

      <Button onClick={handleFormSubmit} variant="contained" color="primary">
        Submit
      </Button>
      <br />
      <br />

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Thanks for rating and comment</DialogTitle>
        <DialogContent>
          {/* Additional content can be added here if needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RatingUI;
