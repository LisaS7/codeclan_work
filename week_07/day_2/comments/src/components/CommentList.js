import React from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
  const commentElements = comments.map((comment) => {
    return (
      <Comment key={comment.id} author={comment.author}>
        {comment.text}
      </Comment>
    );
  });
  return <>{commentElements}</>;
}

export default CommentList;
