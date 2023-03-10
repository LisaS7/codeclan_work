import React, { useState, useEffect } from "react";
import { Buffer } from "buffer";

export default function RavelryBox() {
  const [patterns, setPatterns] = useState([]);
  const url = "https://api.ravelry.com/patterns";
  const urlTopPatterns =
    url +
    "/search.json?craft=crochet&pc=toysandhobbies&query=halloween&sort=favorites&page=1&page_size=20";

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

    for (const pattern of patternURLs) {
      const response = await fetch(pattern, {
        method: "GET",
        headers: headers,
      });
      const data = await response.json();
      setPatterns([...patterns, data.pattern]);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <main></main>;
}
