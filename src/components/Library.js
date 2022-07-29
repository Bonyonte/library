import React, { useState, useEffect} from 'react';
import '../App';
import Book from './Book';

const Library = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Books')
        .then(r =>r.json())
        .then((data) => setBooks(data))
        
    },[])
    //console.log(books);
  return (
    <div className="book-list">{books.map((book) =>{
      return <Book title={book.title} 
      author={book.author} 
      image={book.imgUrl} 
      price={book.price} 
      review={book.review} 
      description={book.description} 
      source={book.source} key={book.id}/>
    })}</div>
  )
}

export default Library;