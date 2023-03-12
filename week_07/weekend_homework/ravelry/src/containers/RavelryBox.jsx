import React, { useState, useEffect } from "react";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import ButtonBox from "./ButtonBox";
import Loading from "../components/Loading/Loading";
import PatternList from "../components/PatternList";
import { requestHeaders } from "../constants/Request";

export default function RavelryBox() {
  const { promiseInProgress } = usePromiseTracker();

  const [patterns, setPatterns] = useState([]);
  const [craft, setCraft] = useState("Crochet");
  const [category, setCategory] = useState("Halloween");

  const urlTopPatterns = `https://api.ravelry.com/patterns/search.json?craft=${craft}&query=${category}&sort=favorites&page=1&page_size=20`;

  async function getData() {
    const response = await fetch(urlTopPatterns, requestHeaders);
    const summaryData = await response.json();

    const patternIDs = summaryData.patterns.map((pattern) => pattern.id);
    const patternURLs = patternIDs.map(
      (id) => `https://api.ravelry.com/patterns/${id}.json`
    );

    let patternList = [];

    for (const pattern of patternURLs) {
      const response = await fetch(pattern, requestHeaders);
      const data = await response.json();
      patternList = [...patternList, data.pattern];
    }
    setPatterns(patternList);
  }

  useEffect(() => {
    trackPromise(getData());
  }, [category, craft]);

  return (
    <>
      <main>
        {promiseInProgress ? (
          <Loading />
        ) : (
          <>
            <ButtonBox
              craft={craft}
              setCraft={setCraft}
              category={category}
              setCategory={setCategory}
            />
            <PatternList patterns={patterns} />
          </>
        )}
      </main>
    </>
  );
}
