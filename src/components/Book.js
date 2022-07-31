import React, {useState} from 'react';
import '../App';

function Book({author, image, title, description, price, review, source}) {
  const [ actualDetails, setActualDetails] = useState(false);

//console.log(book);
  return (
    <div className="book">
        <h4 className="author">{author}</h4>
        <img src={image} alt="book" />
        <button className="bookButton">Details</button>
        <div>
          <p>{title}</p>
          <p>{description}</p>
          <p>{price}</p>
          <p>{review}</p>
          <p>{source}</p>
        </div>
    </div>
  )
}

export default Book