import React from 'react';

function Book({author, image, }) {
  return (
    <div>
        <h4>{author}</h4>
        <img src={image} alt="book" />
    </div>
  )
}

export default Book