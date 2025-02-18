import React from 'react';
import '../App.css';

const RatingStars = ({ rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <div>
      {'★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating)}
    </div>
  );
};

export default RatingStars;