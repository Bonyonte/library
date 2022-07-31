import React, {useState, useEffect} from 'react';
import '../App';

function Comment () {

useEffect(()=>{
  fetch('http://localhost:3000/Comments')
  .then(res=> res.json())
  .then(data=>console.log(data));
}, []);

// const [commentData, setCommentData] = useState({
//   title: "",
//   author: "",
//   comment: "",
// })
  return (
    <div className="comment">
      <form  className="new-comment-form">
          <input  name="title" placeholder="Title" />
          <input name="author" placeholder="Author" />
          <textarea  name="content" placeholder="Write your comment here..." rows={10} />
          <input type="submit" value="Share your comment" />
      </form>
      <div className="sidebar">
        <button>new comment form</button>
      </div>
    </div>
  )
}

export default Comment;