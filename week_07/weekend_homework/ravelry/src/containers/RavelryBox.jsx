import React, { useState, useEffect } from "react";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import Loading from "../components/Loading/Loading";
import PatternList from "../components/PatternList";
import { constants } from "../Constants";
import ButtonBox from "./ButtonBox";

export default function RavelryBox() {
  const { promiseInProgress } = usePromiseTracker();

  const [patterns, setPatterns] = useState([]);
  const [craft, setCraft] = useState("Crochet");
  const [category, setCategory] = useState("Halloween");

  const urlTopPatterns =
    constants.url +
    `/search.json?craft=${craft}&pc=toysandhobbies&query=${category}&sort=favorites&page=1&page_size=20`;

  async function getData() {
    const response = await fetch(urlTopPatterns, constants.requestHeaders);
    const summaryData = await response.json();

    const patternIDs = summaryData.patterns.map((pattern) => pattern.id);
    const patternURLs = patternIDs.map((id) => `${constants.url}/${id}.json`);

    let patternList = [];

    for (const pattern of patternURLs) {
      const response = await fetch(pattern, constants.requestHeaders);
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
      <ButtonBox setCategory={setCategory} setCraft={setCraft} />
      <main>
        {promiseInProgress ? <Loading /> : <PatternList patterns={patterns} />}
      </main>
    </>
  );
}
