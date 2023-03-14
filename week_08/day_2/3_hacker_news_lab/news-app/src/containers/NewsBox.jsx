import React, { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";

export default function NewsBox() {
  const [articles, setArticles] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    const jsonResponse = await response.json();
    const ids = jsonResponse.splice(0, 20);
    const urls = ids.map(
      (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    const articlePromises = await urls.map(async (url) => {
      const res = await fetch(url);
      return await res.json();
    });

    const articleData = await Promise.all(articlePromises);
    setArticles(articleData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <ArticleList articles={articles} />
    </main>
  );
}
