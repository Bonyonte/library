import React, { useState } from 'react';
import '../App';

function Book({author, image, title, description, price, review, source}) {
  const [ actualDetails, setActualDetails] = useState(false);

  const handleClick = () =>{
    setActualDetails(actual=> !actual)
  }

//console.log(book);
  return (
    <div className="book">
        <h4 className="author">{author}</h4>
        <img src={image} alt="book" />
        <button className="bookButton" onClick={handleClick}>Details</button>
        { actualDetails?
          <div>
          <p>{title}</p>
          <p>{description}</p>
          <p>{price}</p>
          <p>{review}</p>
          <p>{source}</p>
        </div>
        :null
        }
    </div>
  )
}

export default Book