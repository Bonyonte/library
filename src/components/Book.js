import React from 'react';

function Book({author, image, }) {
  return (
    <div className="book">
        <h4 className="author">{author}</h4>
        <img src={image} alt="book" />
        <div className="row1">
            <h2>Find your book</h2>
            <div className="search">
                <input type="text" placeholder="Enter Your Book Name" />
                <button><i class="fas fa-search"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Book