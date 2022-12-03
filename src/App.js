import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <h1>Breaking Bad Quotes</h1>
      <Home />
      <Button>Get Random Quote</Button>
    </div>
  );
};

export default App;
