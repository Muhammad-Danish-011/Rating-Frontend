import React, { useState } from 'react';
import RatingUI from './components/rating';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#C2F8E4', // Replace with your desired background color
    },
  },
});

const App = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (comment.trim() !== '') {
      setComments((prevComments) => [...prevComments, comment]);
      setComment('');
      setIsDialogOpen(true);
      setIsCommentSubmitted(true);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Box
          sx={{
            display: 'flex',
            backgroundColor: '#C2F8E4',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
          }}
        >
          <h1>Rating</h1>
          <RatingUI value={rating} onChange={handleRatingChange} />
          <p>Selected Rating: {rating}</p>

          {/* <h2>Comments</h2>
          <div>
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>

          <textarea
            value={comment}
            onChange={handleCommentChange}
            rows={4}
            cols={50}
            placeholder="Add a comment..."
            disabled={isCommentSubmitted}
          />
          <br />
          <button onClick={handleSubmitComment} disabled={isCommentSubmitted}>
            Submit Comment
          </button> */}
        </Box>
      </div>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Thanks for commenting</DialogTitle>
        <DialogContent>
          {/* Additional content can be added here if needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default App;
