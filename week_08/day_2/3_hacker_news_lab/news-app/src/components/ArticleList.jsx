import React from "react";
import Article from "./Article";
import "./ArticleList.css";

export default function ArticleList({ articles }) {
  if (articles.length) {
    const articleList = articles.map((article) => {
      return <Article key={article.id} article={article} />;
    });

    return <section>{articleList}</section>;
  }
}
