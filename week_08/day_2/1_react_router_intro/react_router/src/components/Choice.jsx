import React from "react";
import { useParams } from "react-router-dom";

const Choice = () => {
  const { choice } = useParams();
  return (
    <div>
      <h4>Choice</h4>
      <p>You chose {choice}</p>
    </div>
  );
};

export default Choice;
