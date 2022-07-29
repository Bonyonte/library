import React, {useState} from 'react';
import '../App';

function Comment () {
const [commentData, setCommentData] = useState({
  title: "",
  author: "",
  comment: "",
})
  return (
      <form  className="new-comment-form">
    <input  name="title" placeholder="Title" />
    <input name="author" placeholder="Author" />
    <textarea  name="content" placeholder="Write your comment here..." rows={10} />
    <input type="submit" value="Share your comment" />
  </form>

  )
}

export default Comment;