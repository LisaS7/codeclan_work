import React, { useState, useEffect } from "react";
import { Buffer } from "buffer";
import Header from "../components/Header";
import Categories from "../components/Categories";
import PatternList from "../components/PatternList";

export default function RavelryBox() {
  const [patterns, setPatterns] = useState([]);
  const [craft, setCraft] = useState("Crochet");
  const [category, setCategory] = useState("Halloween");
  const categoryList = ["Halloween", "Christmas", "Valentine's Day"];
  const craftList = ["Knitting", "Crochet"];
  const url = "https://api.ravelry.com/patterns";
  const urlTopPatterns =
    url +
    `/search.json?craft=${craft}&pc=toysandhobbies&query=${category}&sort=favorites&page=1&page_size=20`;

  const username = process.env.REACT_APP_API_USER;
  const password = process.env.REACT_APP_API_PASSWORD;

  let headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + Buffer.from(username + ":" + password).toString("base64")
  );

  async function getData() {
    const response = await fetch(urlTopPatterns, {
      method: "GET",
      headers: headers,
    });
    const summaryData = await response.json();
    const patternIDs = summaryData.patterns.map((pattern) => pattern.id);
    const patternURLs = patternIDs.map((id) => `${url}/${id}.json`);
    let patternList = [];

    for (const pattern of patternURLs) {
      const response = await fetch(pattern, {
        method: "GET",
        headers: headers,
      });
      const data = await response.json();
      patternList = [...patternList, data.pattern];
    }
    setPatterns(patternList);
  }

  useEffect(() => {
    getData();
  }, [category, craft]);

  return (
    <>
      <Header />
      <section></section>
      <Categories options={craftList} setValue={setCraft} />
      <Categories options={categoryList} setValue={setCategory} />
      <main>
        <PatternList patterns={patterns} />
      </main>
    </>
  );
}
