import React, { useState } from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

function CommentBox() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Lisa",
      text: "I love cats and pizza",
    },
    {
      id: 2,
      author: "Alec",
      text: "Dinosaurs are awesome!!",
    },
  ]);

  function addComment(newComment) {
    setComments([...comments, newComment]);
  }

  return (
    <section className="comment-box">
      <article>
        <h1>Comments</h1>
        <CommentList comments={comments} />
      </article>

      <CommentForm handleSubmit={addComment} />
    </section>
  );
}

export default CommentBox;
