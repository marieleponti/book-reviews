import React from 'react'
import '../stylesheets/Review.css'

function Review(){
  return (
    <div className='review-container'>
      <img 
        className='review-image'
        src={require('../images/bookcover_AhmedAzizsEpicYear.png')}
        alt='First Review Ahmed Azizs Epic Year'
      />
      <div className='text-review-container'>
        <p className='book-title'>Ahmad Aziz's Epic Year</p>
        <p className='author'>Nina Hamza</p>
        <p className='synopsis'>"A Indian American boy endures a family move from Hawaii to frigid 
        Minnesota and, with the help of three life-changing books he reads in school, he learns to 
        like reading, and ultimately, himself."</p>
        <p className='review-text'>From Schol Library Journal: "A strong debut destined to become 
        a classic. Recommended for classrooms and libraries of all types, particularly where Zanib 
        Mian's "Planet Omar" series flies off the shelves.--Mahasin A. Aleem, Oakland P.L., CA"</p>
      </div>
    </div>
  );
}

export default Review;