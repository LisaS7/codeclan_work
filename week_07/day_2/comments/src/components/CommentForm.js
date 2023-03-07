import React, { useState } from "react";

function CommentForm({ handleSubmit }) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      author: author,
      text: comment,
    };
    handleSubmit(newComment);
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="author">Author:</label>
      <input
        id="author"
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="comment">Comment:</label>
      <input
        id="comment"
        type="text"
        onChange={(e) => setComment(e.target.value)}
      />
      <button>submit</button>
    </form>
  );
}

export default CommentForm;
