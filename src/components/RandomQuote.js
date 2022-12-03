import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((data) => data.json())
      .then((data) => setQuote(data));
  }, []);

  let fetchNewQuote = () => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((data) => data.json())
      .then((data) => setQuote(data));
  };

  return (
    <div className="App">
      <div className="quote" key="index">
        <h2>{quote[0].quote}</h2>
        <small>-{quote[0].author}-</small>
      </div>
      <br />
      <button className="btn" onClick={fetchNewQuote}>
        Generate New Quote
      </button>
      <ReactBootStrap.Button href="/">Back</ReactBootStrap.Button>
    </div>
  );
};

export default RandomQuote;
