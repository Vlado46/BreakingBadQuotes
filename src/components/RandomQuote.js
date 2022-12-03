import React from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/")
      .then((res) => res.json())
      .then((res) => {
        setQuote(res);
      });
  }, []);

  let fetchNewQuote = () => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/")
      .then((res) => res.json())
      .then((res) => {
        setQuote(res);
      });
  };
  return (
    <div className="App">
      <div className="quote">
        <h2>{quote.quote}</h2>
        <small>-{quote.author}-</small>
      </div>
      <br />
      <button className="btn" onClick={fetchNewQuote}>
        Get Random Quote
      </button>
    </div>
  );
};

export default RandomQuote;
