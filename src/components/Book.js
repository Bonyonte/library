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
        <h4 className="author">Author: {author}</h4>
        <img src={image} alt="book" />
        <button className="bookButton" onClick={handleClick}>Details</button>
        { actualDetails?
          <div>
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <p>Review:{review}</p>
          <p>Source: {source}</p>
        </div>
        :null
        }
    </div>
  )
}

export default Book