import React, { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import SearchForm from "../components/SearchForm";

export default function NewsBox() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  async function getData() {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    const jsonResponse = await response.json();
    const ids = jsonResponse.splice(20, 40);
    const urls = ids.map(
      (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    const articlePromises = await urls.map(async (url) => {
      const res = await fetch(url);
      return await res.json();
    });

    const articleData = await Promise.all(articlePromises);

    if (search) {
      const filteredArticles = articleData.filter((article) =>
        article.title.includes(search)
      );
      setArticles(filteredArticles);
    } else {
      setArticles(articleData);
    }
  }

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <main>
      <SearchForm setSearch={setSearch} />
      <ArticleList articles={articles} />
    </main>
  );
}
