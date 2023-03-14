import React from "react";

export default function ArticleList({ articles }) {
  if (articles.length) {
    const articleList = articles.map((article) => {
      return <p key={article.id}>{article.title}</p>;
    });
    return <section>{articleList}</section>;
  }
}
