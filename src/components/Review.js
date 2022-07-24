import React from 'react'
import '../stylesheets/Review.css'

function Review(props){
  return (
    <div className='review-container'>
      <img 
        className='review-image'
        src={require(`../images/bookcover_${props.image}.png`)}
        alt={`${props.bookTitle}`}
      />
      <div className='text-review-container'>
        <p className='book-title'>
          <strong>{props.bookTitle}</strong>
          </p>
        <p className='author'>{props.author}</p>
        <p className='synopsis'>{props.synopsis}</p>
        <p className='review-text'>{props.reviewText}</p>
      </div>
    </div>
  );
}

export default Review;