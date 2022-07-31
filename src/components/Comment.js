import React, {useState, useEffect} from 'react';
import '../App';

function Comment () {
  const [commentData, setCommentData] = useState({
    title: "",
    name: "",
    comment: "",
  })

  function handleChange(e){
    setCommentData({...commentData, [e.target.name]: e.target.value})
  }

useEffect(()=>{
  fetch('http://localhost:3000/Comments')
  .then(res=> res.json())
  .then(data=>setCommentData(data));
}, []);

console.log(commentData)
  return (
    <div className="comment">
      <form  className="new-comment-form">
          <input onChange={handleChange} value={commentData.title} name="title" placeholder="Title" /><br/>
          <input onChange={handleChange} value={commentData.author} name="name" placeholder="Name" /><br/>
          <textarea  onChange={handleChange} value={commentData.content} name="content" placeholder="Write your comment here..." rows={10} /><br/>
          <input type="submit" value="Share your comment" />
      </form>
      <div className="sidebar">
        {/* {commentData.title} */}
      </div>
    </div>
  )
}

export default Comment;