import React from 'react';
import '../App';

function Book({author, image, }) {


  return (
    <div className="book">
        <h4 className="author">{author}</h4>
        <img src={image} alt="book" />
        <button className="bookButton">Details</button>
    </div>
  )
}

export default Book