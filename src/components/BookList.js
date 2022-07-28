import React, { useState, useEffect} from 'react';
import '../App';
import {API_URL} from '../API';
import axios from 'axios';

const BookList = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(API_URL)
        .then(r =>{
            console.log(r.data)
            setBooks(r.data)
        })
        .catch(err => cosole.log(err));
        
    }, [])
  return (
    <div className="book-list">BookList</div>
  )
}

export default BookList;