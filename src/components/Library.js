import React, { useState, useEffect} from 'react';
import '../App';
import Book from './Book';
import axios from 'axios';
//import SearchIcon from '@mui/icons-material/Search';

const Library = () => {

    const [books, setBooks] = useState([]);
    const [ search, setSearch] = useState(" ");

    useEffect(() => {
        fetch('http://localhost:3000/Books')
        .then(r =>r.json())
        .then((data) => setBooks(data))
        
    },[])

    const searchBook = (e) =>{
      if(e.key==="Enter"){
        axios.get("https://afternoon-sierra-69142.herokuapp.com/Books")
        .then(res =>setBooks(res.data))
        //.catch(err => console.log(err));
      }
    }
    //console.log(books);
  return (
    <>
    <div className="row2">
            <h2>Find your book</h2>
            <div className="search">
                <input type="text" placeholder="Enter Your Book Name" 
               value={search} onChange={e=>setSearch(e.target.value)}
               onKeyPress={searchBook}
               />
               {/* <button>< SearchIcon /></button> */}
            </div>
        </div>
    <div className="book-list">{books.map((book) =>{
      return <Book title={book.title} 
      author={book.author} 
      image={book.imgUrl} 
      price={book.price} 
      review={book.review} 
      description={book.description} 
      source={book.source} key={book.id}/>
    })}
    </div>
    </>
  )
}

export default Library;