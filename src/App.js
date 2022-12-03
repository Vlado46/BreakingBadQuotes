import React, { useState, useEffect } from "react";
import "./App.css";
import * as ReactBootStrap from "react-bootstrap";

const App = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes/5")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  const renderQuote = (tableData, index) => {
    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <th colSpan={2}>{tableData.quote}</th>
        <th>{tableData.author}</th>
      </tr>
    );
  };

  return (
    <div className="App">
      <h1>Breaking Bad Quotes</h1>
      <ReactBootStrap.Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th colSpan={2}>Quote</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>{tableData.map(renderQuote)}</tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default App;
