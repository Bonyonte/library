import React from 'react';
import '../App';

const Home = () => {
  return (
    <div className="book-details">
      <div className="row1"> 
        <h1>A room without a book is like <br/> a body without a soul</h1>
      </div>
       <div className="row2">
            <h2>Find your book</h2>
            <div className="search">
                <input type="text" placeholder="Enter Your Book Name" />
                <button><i class="fa-regular fa-magnifying-glass"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Home