import React from "react";

function Comment({ children, author }) {
  return (
    <blockquote>
      <h4>{children}</h4>
      <p> - {author}</p>
    </blockquote>
  );
}

export default Comment;
