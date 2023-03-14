import React from "react";
import "./Article.css";

export default function Article({ article }) {
  return (
    <article>
      <p>{article.title}</p>
    </article>
  );
}
